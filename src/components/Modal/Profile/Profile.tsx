import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { imgUpload, profileGet, profileSet, withdrawal } from "utils/profile";
import * as S from "./styled";

const Profile = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLButtonElement>(null);

  const [isModify, setIsModify] = useState<boolean>(false);

  const [nickname, setNickname] = useState<string>("");
  const [profileImg, setProfileImg] = useState<string>("");
  const [beforeName, setBeforeName] = useState<string>("");
  const [beforeImg, setBeforeImg] = useState<string>("");

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const userId = localStorage.getItem("user_id");

    if (userId) {
      const responseData = await profileGet(userId);
      setNickname(responseData.data.nickname);
      setProfileImg(responseData.data.image_path);
      setBeforeName(responseData.data.nickname);
      setBeforeImg(responseData.data.image_path);
    }
  };

  const logout = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      localStorage.clear();
      alert("로그아웃 되었습니다.");
      navigate("/");
    }
  };

  const confirmAlert = async () => {
    if (window.confirm("탈퇴하시겠습니까?")) {
      await withdrawal();
      localStorage.clear();
      alert("탈퇴 되었습니다.");
      navigate("/");
    }
  };

  const upload = () => {
    inputRef.current?.click();
  };

  const preview = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;

    const file = e.target.files[0];
    const imgLink = await imgUpload(file);

    imgRef.current?.setAttribute(
      "style",
      `background-image: url(${imgLink.data.url})`
    );
    setProfileImg(imgLink.data.url);
  };

  const clickButton = () => {
    if (isModify) {
      profileRequest();
    }
    setIsModify(!isModify);
  };

  const profileRequest = async () => {
    if (nickname === beforeName && profileImg === beforeImg) {
      return;
    }

    const data = {
      nickname: nickname,
      image_path: profileImg,
    };

    try {
      await profileSet(data);
      alert("프로필을 변경했습니다!");
      navigate("/main");
    } catch {
      alert("프로필 변경에 실패하였습니다.");
    }
  };

  return (
    <S.Container>
      <S.ProfileButton
        img={profileImg}
        ref={imgRef}
        onClick={upload}
        events={isModify ? "auto" : "none"}
      />
      <S.ProfileImg
        ref={inputRef}
        type="file"
        onChange={preview}
        accept=".jpg, .png, .webp, .heic"
      />
      <S.Nickname
        maxLength={6}
        name="nickname"
        value={nickname}
        events={isModify ? "auto" : "none"}
        onChange={change}
      />
      <S.ModifyButton onClick={clickButton}>
        {isModify ? "수정 완료" : "프로필 수정"}
      </S.ModifyButton>
      <S.ButtonContaine>
        <S.Logout onClick={logout}>로그아웃</S.Logout>
        <S.Withdrawal onClick={confirmAlert}>회원탈퇴</S.Withdrawal>
      </S.ButtonContaine>
    </S.Container>
  );
};

export default Profile;

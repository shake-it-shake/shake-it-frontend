import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { imgUpload, profileSet } from "utils/profile";
import * as S from "./styled";

const ProfileSet = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLButtonElement>(null);

  const [profile, setProfile] = useState("");
  const [nickname, setNickname] = useState("");

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
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
    setProfile(imgLink.data.url);
  };

  const upload = () => {
    inputRef.current?.click();
  };

  const profileRequest = async () => {
    if (nickname === null || nickname === "") {
      alert("닉네임을 설정해주세요");
      return;
    }
    const data = {
      nickname: nickname,
      image_path: profile,
    };

    try {
      await profileSet(data);
      alert("프로필을 설정했습니다!");
      navigate("/main");
    } catch {
      alert("프로필 설정을 실패하였습니다.");
    }
  };

  return (
    <>
      <S.Title>
        프로필을 설정하고
        <br />
        흔들러 가볼까요?
      </S.Title>
      <S.GuideText>사진과 닉네임을 설정해 주세요</S.GuideText>
      <S.ProfileButton onClick={upload} ref={imgRef} />
      <S.ProfileFile
        ref={inputRef}
        type="file"
        onChange={preview}
        accept=".jpg, .png, .webp, .heic"
      />
      <S.NicknameInput
        name="nickname"
        value={nickname}
        onChange={change}
        placeholder="닉네임"
        maxLength={6}
      />
      <S.ProfileSetButton onClick={profileRequest}>완료</S.ProfileSetButton>
    </>
  );
};

export default ProfileSet;

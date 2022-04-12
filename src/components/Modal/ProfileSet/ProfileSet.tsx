import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { profileSet } from "utils/profileSet";
import * as S from "./styled";

interface PropsType {
  nickname: string,
  profile: string,
  change: (e: React.FormEvent<HTMLInputElement>) => void;
}

const ProfileSet = ({change, profile, nickname} : PropsType) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLButtonElement>(null);

  const preview = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = () => {
      imgRef.current?.setAttribute(
        "style",
        `background-image: url(${reader.result})`
      );
    };

    reader.readAsDataURL(file);
  };

  const upload = () => {
    inputRef.current?.click();
  };

  const profileRequest = async () => {
    const data = {
      nickname: nickname,
      image_path: profile,
    }

    try {
      await profileSet(data);
      navigate("/");
    } catch{
      alert("프로필 설정을 실패하였습니다.");
    }
  }

  return (
    <>
      <S.Title>
        프로필을 설정하고
        <br />
        흔들러 가볼까요?
      </S.Title>
      <S.GuideText>사진과 닉네임을 설정해 주세요</S.GuideText>
      <S.ProfileButton onClick={upload} ref={imgRef} />
      <S.ProfileFile ref={inputRef} type="file" onChange={preview} />
      <S.NicknameInput name="nickname" value={nickname} onChange={change} placeholder="닉네임" />
      <S.ProfileSetButton onClick={profileRequest}>완료</S.ProfileSetButton>
    </>
  );
};

export default ProfileSet;

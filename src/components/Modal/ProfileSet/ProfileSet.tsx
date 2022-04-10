import React, { useRef } from "react";
import * as S from "./styled";

const ProfileSet = () => {
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
      <S.NicknameInput placeholder="닉네임" />
      <S.ProfileSetButton>완료</S.ProfileSetButton>
    </>
  );
};

export default ProfileSet;

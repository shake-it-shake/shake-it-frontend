import * as S from "./styled";

const ProfileSet = () => {
  return (
    <>
      <S.Title>
        프로필을 설정하고
        <br />
        흔들러 가볼까요?
      </S.Title>
      <S.GuideText>사진과 닉네임을 설정해 주세요</S.GuideText>
      <S.ProfileImg />
      <S.ProfileSetInput placeholder="닉네임" />
      <S.ProfileSetButton>완료</S.ProfileSetButton>
    </>
  );
};

export default ProfileSet;

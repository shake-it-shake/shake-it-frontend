import { Fragment, useRef, useState } from "react";
import { imgUpload } from "utils/profile";
import { makeRoom } from "utils/room";
import * as S from "./styled";

const MakeRoom = () => {
  const [input, setInput] = useState({
    roomTitle: "",
    personnel: 2,
    roomImage: "",
  });
  const imgRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const makeLine = () => {
    const val = (Number(input.personnel) - 2) * 16;
    return val;
  };

  const upload = () => {
    inputRef.current?.click();
  };

  const preview = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;

    const file = e.target.files[0];

    try {
      const imgLink = await imgUpload(file);

      imgRef.current?.setAttribute(
        "style",
        `background-image: url(${imgLink.data.url})`
      );
      setInput({
        ...input,
        roomImage: imgLink.data.url,
      });
    } catch (error) {
      alert("업로드에 실패했습니다.");
    }
  };

  const reqMakeRoom = async () => {
    const data = {
      title: input.roomTitle,
      personnel: Number(input.personnel),
      image_path: input.roomImage,
    };


    try {
      const roomId = await makeRoom(data);
      console.log("성공");
    } catch (error) {
      alert("클럽사진 혹은 클럽명을 확인해주세요.");
      console.log(error);
    }
  };

  return (
    <Fragment>
      <S.RoomImg onClick={upload} ref={imgRef} />
      <S.RoomFile
        ref={inputRef}
        type="file"
        onChange={preview}
        accept=".jpg, .png, .webp, .heic"
      />
      <S.SubTitle>클럽명</S.SubTitle>
      <S.TitleInput
        name="roomTitle"
        value={input.roomTitle}
        onChange={change}
        autoComplete="off"
        maxLength={8}
      />
      <S.SubTitle>최대 인원</S.SubTitle>
      <S.GageNum>
        <S.GageFigure>2</S.GageFigure>
        <S.GageFigure>8</S.GageFigure>
      </S.GageNum>
      <S.GageBar
        type="range"
        name="personnel"
        min={2}
        max={8}
        value={input.personnel}
        onChange={change}
        val={makeLine()}
      />
      <S.MakeButton onClick={reqMakeRoom}>생성하기</S.MakeButton>
    </Fragment>
  );
};

export default MakeRoom;

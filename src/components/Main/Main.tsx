import { useEffect, useState } from "react";
import { getRooms } from "utils/main";
import Card from "./Card/Card";
import * as S from "./styled";

const Main = () => {
  const [rooms, setRooms] = useState<Array<object> | null>(null);

  useEffect(() => {
    setRoomList();
  }, []);

  const setRoomList = async () => {
    try {
      const list = (await getRooms()).data;
      setRooms(list.rooms);
    } catch (err) {
      console.log(err);
    }
  };

  const renderList = rooms?.map((data: any, index) => {
    const {
      id,
      title,
      member,
      personnel,
      room_image,
      current_count,
      owner_name,
      created_at,
    } = data;
    return (
      <Card
        id={id}
        title={title}
        member={member}
        personnel={personnel}
        room_image={room_image}
        current_count={current_count}
        owner_name={owner_name}
        created_at={created_at}
        key={index}
      />
    );
  });

  return (
    <S.Container>
      <S.GridContainer>{renderList}</S.GridContainer>
    </S.Container>
  );
};

export default Main;

import { MeetingProvider } from "amazon-chime-sdk-component-library-react";
import Room from "components/Room/Room";

const RoomContainer = () => {
  return (
    <MeetingProvider>
      <Room />
    </MeetingProvider>
  );
};

export default RoomContainer;

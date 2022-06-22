import uri from "constance/uri";
import instance from "../axios";

interface ReqeustType {
  title: string;
  personnel: number;
  image_path: string;
}

export interface MeetingType {
  Meeting: {
    MeetingId: string;
    ExternalMeetingId: string | null;
    MediaPlacement: {
      AudioHostUrl: string;
      AudioFallbackUrl: string;
      ScreenDataUrl: string;
      ScreenSharingUrl: string;
      ScreenViewingUrl: string;
      SignalingUrl: string;
      TurnControlUrl: string;
      EventIngestionUrl: string;
    };
    MediaRegion: string;
  };
}
export const makeRoom = async (data: ReqeustType) => {
  const response = await instance.post<MeetingType>(uri.rooms, data);
  return response;
};

interface AttendeeType {
  Attendance: {
    ExternalUserId: string;
    AttendeeId: string;
    JoinToken: string;
  };
  Meeting: {
    MeetingId: string;
    ExternalMeetingId: string | null;
    MediaPlacement: {
      AudioHostUrl: string;
      AudioFallbackUrl: string;
      ScreenDataUrl: string;
      ScreenSharingUrl: string;
      ScreenViewingUrl: string;
      SignalingUrl: string;
      TurnControlUrl: string;
      EventIngestionUrl: string;
    };
    MediaRegion: string;
  };
}

export const makeAttendee = async (roomId: string) => {
  const response = instance.post<AttendeeType>(
    uri.attendee,
    {},
    { params: { roomId } }
  );

  return response;
};

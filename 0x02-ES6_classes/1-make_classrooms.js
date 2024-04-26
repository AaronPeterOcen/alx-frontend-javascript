import ClassRoom from "./0-classroom";

// class initializeRooms extends ClassRoom {
//     constructor ()
// }
export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}

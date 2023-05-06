import { PrettyChatWindow } from "react-chat-engine-pretty";
import './styles/chat.css'

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={'138a8d62-e4a2-4d86-8e2c-e051a8d7490d'}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

  export default ChatsPage;
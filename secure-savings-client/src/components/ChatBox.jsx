import { useEffect, useState } from "react";
import "./ChatBox.css";
import { TbMessageCircle2 } from "react-icons/tb";

import useAuth from "../Hooks/useAuth";

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const { authInfo } = useAuth();
  const info = authInfo?.user || {};
  const { displayName, email } = authInfo?.user || {};
  useEffect(() => {
    const chatInit = (selector) => {
      if (!window.LIVE_CHAT_UI) {
        let chat = document.getElementById(selector);
        let toggles = chat.querySelectorAll(".toggle");

        window.setTimeout(() => {
          chat.classList.add("is-active");
        }, 1000);

        toggles.forEach((toggle) => {
          toggle.addEventListener("click", () => {
            chat.classList.add("is-active");
          });
        });

        document.onkeydown = function (evt) {
          evt = evt || window.event;
          var isEscape = false;
          if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
          } else {
            isEscape = evt.keyCode === 27;
          }
          if (isEscape) {
            chat.classList.remove("is-active");
          }
        };

        window.LIVE_CHAT_UI = true;
      }
    };

    chatInit("chat-app");
  }, []);

  return (
    <div className="main z-50">
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:500:600|Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css"
      />
      <div
        id="chat-app"
        className={`chat-app w-0 h-0 ${!open && "is-active !h-[600px] !w-[360px]"}`}
      >
        <div className="chat-app_toggle toggle" onClick={() => setOpen(!open)}>
          <div className="icon send">
            <i className="fas fa-paper-plane" />
          </div>
          <div className="icon open">
            <TbMessageCircle2 />
          </div>
        </div>
        <div className="chat-app_box">
          <div className="chat-app_header">
            <div
              className="close"
              onClick={() => {
                setOpen(!open);
              }}
            />
            <div className="branding">
              <div className="avatar is-online">
                <img src={info?.reloadUserInfo?.photoUrl} alt="" />
              </div>
              <div className="content">
                <p className="title">{displayName}</p>
                <p className="subtitle">{email}</p>
              </div>
            </div>
          </div>
          <div className="chat-app_content">
            <div className="messages">
              <div className="message">
                <p className="text">Cras at dapibus nisi, vel commodo ex.</p>
              </div>
              <div className="message reply">
                <p className="text">
                  Pellentesque sagittis, velit sed vehicula rhoncus, orci risus
                  tempus arcu, eu rhoncus ex diam id felis
                </p>
              </div>
              <div className="message">
                <p className="text">Ut ac ante ut quam pharetra.</p>
              </div>
              <div className="message reply">
                <p className="text">
                  Pellentesque sagittis, velit sed vehicula rhoncus, orci risus
                  tempus arcu, eu rhoncus ex diam id felis
                </p>
              </div>
              <div className="message">
                <p className="text">Ut ac ante ut quam pharetra faucibus.</p>
              </div>
            </div>
          </div>
          <div className="chat-app_footer">
            <div className="tools">
              <a className="button-icon">
                <i className="far fa-smile-wink" />
              </a>
              <a className="button-icon">
                <i className="fas fa-paperclip" />
              </a>
              <a className="copyright">Talk With Manager</a>
            </div>
            <input className="chat-input" type="text" placeholder="Type..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

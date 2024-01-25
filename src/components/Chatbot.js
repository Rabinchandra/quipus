import React, { useState, useContext } from "react";
import getAiResponse from "../gemini_ai.js/gemini";
import { Modal, Select } from "antd";
import { CompanyContext } from "../context_api/companyContext";

function Chatbot() {
  const [chatbotOn, setChatbotOn] = useState(false);
  const [response, setResponse] = useState("");
  //   const useContext(CompanyContext)

  const [chats, setChats] = useState([
    {
      type: "ai",
      message: "hi",
      options: [
        ["option", "Compare", getAiResponse],
        ["option", "Dummy Option"],
      ],
    },
    // {
    //   type: "user",
    //   message: "hello",
    // },
  ]);

  const { companies } = useContext(CompanyContext);

  function OptionsComponent({ options }) {
    return (
      <div className="options">
        {options.map((o, index) => (
          <div
            className="option"
            key={`option-${index}`}
            onClick={() => responseHandler(o[2])}
          >
            {o[1]}
          </div>
        ))}
      </div>
    );
  }

  function convertToBoldHTML(text) {
    // Use a regular expression to find words enclosed in double asterisks
    const regex = /\*\*(.*?)\*\*/g;

    // Replace matched words with HTML bold tags
    const result = text.replace(regex, "<b>$1</b>");

    return result;
  }

  //   Modal
  const [company1, setCompany1] = useState("");
  const [company2, setCompany2] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // here
  const handleOk = () => {
    console.log(company1, company2);
    let res1 = companies.filter((c) => c.id == company1)[0];
    let res2 = companies.filter((c) => c.id == company2)[0];

    getAiResponse(JSON.stringify(res1), JSON.stringify(res2)).then((msg) =>
      setChats((chats) => [
        ...chats,
        {
          type: "ai",
          message: convertToBoldHTML(msg),
          options: [],
        },
      ])
    );

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const responseHandler = (func) => {
    showModal(func);
    // func().then((msg) =>
    //   setChats((chats) => [
    //     ...chats,
    //     {
    //       type: "ai",
    //       message: convertToBoldHTML(msg),
    //       options: [],
    //     },
    //   ])
    // );
  };

  return (
    <div className="chatbot">
      <div className="button" onClick={() => setChatbotOn(true)}>
        <i class="fi fi-rr-comment"></i>
      </div>
      <div
        className="chat-box"
        style={{ display: chatbotOn ? "block" : "none" }}
      >
        <header>
          <i
            className="fi fi-rr-angle-down"
            style={{ marginRight: "20px", cursor: "pointer" }}
            onClick={() => setChatbotOn(false)}
          ></i>
          <img
            src="
            https://e7.pngegg.com/pngimages/794/371/png-clipart-artificial-intelligence-mind-concept-graphics-artificial-intelligence-brain-text-symmetry-thumbnail.png
          "
            alt=""
          />
          Chat with AI
        </header>
        <div className="chat">
          {chats.map((chat, i) => (
            <>
              <div
                className={chat.type}
                dangerouslySetInnerHTML={{ __html: chat.message }}
              ></div>
              {/* <div className={chat.type}>{chat.message}</div> */}
              {chat.type === "ai" && (
                <OptionsComponent options={chat.options} />
              )}
            </>
          ))}

          <div className="input">
            <input type="text" />
            <button className="send">Send</button>
          </div>
        </div>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select
          options={[
            { value: "1", label: "HDFC" },
            { value: "2", label: "Ahenuser" },
            { value: "3", label: "Kurlon Enterprises" },
            { value: "4", label: "Phillips" },
            { value: "5", label: "Oravel Stays Ltd." },
          ]}
          style={{ width: "130px" }}
          onChange={(val) => setCompany1(val)}
        />
        <Select
          options={[
            { value: "1", label: "HDFC" },
            { value: "2", label: "Ahenuser" },
            { value: "3", label: "Kurlon Enterprises" },
            { value: "4", label: "Phillips" },
            { value: "5", label: "Oravel Stays Ltd." },
          ]}
          style={{ width: "130px" }}
          onChange={(val) => setCompany2(val)}
        />
      </Modal>
    </div>
  );
}

export default Chatbot;

/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";
import * as s from "./style";
import main from "../../assets/img/main.jpg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useState } from "react";
import ProfileModal from "../../components/Modal/ProfileModal/ProfileModal";

function MainPage(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <PageLayout>
      <div css={s.layout}>
        <div css={s.container}>
          <div css={s.aboutme}>
            <img
              src={main}
              alt="main"
              onContextMenu={handleContextMenu}
              draggable="false"
            />
            <h1>
              끈기있는
              <br />
              개발자
              <br />
            </h1>
            <p>
              일을 맡으면 끝까지 하는 끈기와 책임감을 가지고 있습니다.
              <br />
              웹 개발을 위한 프론트엔드와 백엔드 기술을 배운적이 있어 협업을 할
              때
              <br />
              팀원들과의 소통에 더 능하다는 장점이 있습니다.
              <br />
              소통을 기반으로 협업을 통해 고객 요구에 맞는 효과적인 솔루션을
              제공할 수 있습니다.
            </p>
            <button css={s.look} onClick={handleOpenModal}>
              <IoMdInformationCircleOutline />
              상세 정보
            </button>
          </div>
          <div css={s.profileLayout}>
            <div css={s.test}>
            <div css={s.abc(main)} />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ProfileModal onClose={handleCloseModal} />}
    </PageLayout>
  );
}

export default MainPage;

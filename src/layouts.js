import styled from "styled-components";

const fiesta = "#fbb03b";
const kis = "#662D91";
const peoples = "#00E19D";
const commeets = "#FF3600";

function whichEventColor(event) {
  event = event.toLowerCase();
  if (event === "kis") {
    return kis;
  } else if (event === "fiesta") {
    return fiesta;
  } else if (event === "peoples") {
    return peoples;
  } else if (event === "commeets") {
    return commeets;
  }
}
function whichTextEventColor(event) {
  event = event.toLowerCase();
  if (event === "kis" || event === "commeets") {
    return "white";
  } else {
    return "black";
  }
}

export const Container = styled.section`
  position: relative;
  text-align: left;
  padding: 2.5rem 4rem;
  background-color: #000000;
  color: white;
  overflow: hidden;
  margin-bottom: 5rem;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .date {
    position: relative;
    display: flex;
    width: fit-content;
    align-items: center;
    margin-bottom: 2.5rem;

    div {
      margin-left: 1rem;

      h1 {
        font-size: 45px;
        font-weight: 600;
      }
      h2 {
        color: ${(props) => whichEventColor(props.event)};
        font-size: 27px;
        font-weight: 500;
      }
    }

    img {
      padding: 0.3rem;
      margin-top: 0.32rem;
      background-color: ${(props) => whichEventColor(props.event)};
    }
  }

  .main_content {
    display: flex;
    margin: 0 auto;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-itens: center;
      border: 3px solid ${(props) => whichEventColor(props.event)};
      word-break: break-all;

      h1 {
        font-weight: 900;
        margin-bottom: 2.5rem;
      }
    }

    .leaders {
      display: flex;
      flex-wrap: wrap;
      gap: 2.5rem;

      &.small {
        max-width: 650px;
        margin: 0 auto;
      }

      .leader {
        position: relative;
        height: 370px;

        p {
          position: absolute;
          right: 0;
          top: 5%;
          z-index: 2;
          background-color: ${(props) => whichEventColor(props.event)};
          font-size: 17px;
          color: ${(props) => whichTextEventColor(props.event)};
          font-weight: 700;
          text-transform: uppercase;
          text-align: center;
          padding: 0.5rem;
          word-wrap: break-word;
          text-orientation: upright;
        }

        .info {
          display: flex;
          justify-content: center;
          align-itens: center;
          flex-direction: column;

          width: 271px;
          height: 122px;
          text-align: center;
          position: absolute;
          border: 3px solid ${(props) => whichEventColor(props.event)};
          padding: 0.5rem 1.5rem;
          bottom: 0;
          right: 0;
          background-color: #000000;

          h1 {
            font-size: 23px;
            font-weight: 600;
          }

          h2 {
            font-size: 23px;
            font-weight: 400;
          }
        }

        img {
          width: 290px;
          padding-right: 1rem;
        }
      }
    }
  }

  .title {
    margin-top: 2rem;

    h2 {
      font-weight: 600;
      color: ${(props) => whichEventColor(props.event)};
      font-size: 25px;
      margin-bottom: 0.5rem;
    }
    h1 {
      font-size: 36px;
      font-weight: 600;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    width: 750px;
    height: 40px;
    opacity: 0.5;
    margin: 2rem auto 0;

    img {
      padding-right: 2.5rem;
      border-right: 2px solid white;
    }
    img:nth-last-of-type(1),
    img:nth-last-of-type(2) {
      border-right: none;
    }
  }
`;

export const Text_layout_small = styled.div`
  width: 290px;
  padding: 1.5rem 1.5rem;

  .content {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 31px;
    }

    h1.right {
      text-align: right;
      color: black;
      text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
        1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
    }
  }

  img {
    transform: translateX(-50%);
    left: 50%;
  }
`;

export const Text_layout_big = styled.div`
  padding: 3.5rem 1.5rem;
  margin-right: 2.5rem;

  .content {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 75px;
    }
  }

  img {
    transform: translateX(-50%);
    left: 50%;
    margin-top: 2.5rem;
  }
`;

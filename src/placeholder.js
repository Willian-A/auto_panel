import React from "react";

import { Container, Text_layout_small, Text_layout_big } from "./layouts";

import UTC3 from "../static/UTC-3.svg";

import fundo from "../static/fundo.jpg";
import fiesta from "../static/fiesta.png";
import fiesta_2 from "../static/fiesta_2.png";
import kis from "../static/kis.png";
import kis_2 from "../static/kis_2.png";
import commeets from "../static/commeets.png";
import commeets_2 from "../static/commeets_2.png";
import peoples from "../static/peoples.png";
import peoples_2 from "../static/peoples_2.png";

function Random(props) {
  let objeto = [];
  let last = -1;
  // return props.values.map((text, index) => {
  //   const componentRef = React.useRef();
  //   React.useEffect(
  //     () =>
  //       props.setRefs((old) => [...old, { ref: componentRef, name: text[0] }]),
  //     []
  //   );
  //   return (
  //     <div className="box_shadow">
  //       <section ref={componentRef} className="container" key={index}></section>
  //     </div>
  //   );
  // });

  if (props.values.length >= 1 && props.images.length >= 1) {
    props.values.forEach((array, i) => {
      if (array[0]) {
        objeto.push({
          event: array[0],
          theme: array[1],
          date: array[2],
          hour: array[3],
          leaders: [],
        });
        last++;
      } else if (array[4]) {
        if (array[6]) {
          objeto[last].leaders.push({
            name: array[4],
            company: array[5],
            moderator: array[6],
            sex: array[7],
          });
        } else {
          objeto[last].leaders.unshift({
            name: array[4],
            company: array[5],
            moderator: array[6],
            sex: array[7],
          });
        }
      }
    });

    objeto.map((values) => {
      values.leaders.map((leader) => {
        Object.entries(props.images).forEach((entry) => {
          if (
            entry[1].name
              .replace(".png", "")
              .replace(".jpg", "")
              .replace(".jpeg", "") === leader.name
          ) {
            leader.image = entry[1];
          }
        });
      });
    });

    return objeto.map((panel, index) => {
      const componentRef = React.useRef();
      React.useEffect(
        () =>
          props.setRefs((old) => [
            ...old,
            { ref: componentRef, name: panel.theme },
          ]),
        []
      );
      const leaders = panel.leaders.map((leader, i) => {
        const src = URL.createObjectURL(leader.image);

        function IsModerator() {
          if (leader.moderator) {
            if (leader.sex.toLowerCase() === "masculino") {
              return (
                <p>
                  m
                  <br />o <br />d <br />e <br />r <br />a <br />d <br />o <br />
                  r
                </p>
              );
            } else {
              return (
                <p>
                  m <br />o <br />d <br />e <br />r <br />a <br />d <br />o{" "}
                  <br />r <br />a
                </p>
              );
            }
          }

          return <></>;
        }
        return (
          <div className="leader" key={i}>
            <IsModerator />
            <img src={src} alt="" />
            <div className="info">
              <h1>{leader.name}</h1>
              <h2>{leader.company}</h2>
            </div>
          </div>
        );
      });

      function LayoutQuantity() {
        function witchEventLogo() {
          const event = panel.event.toLowerCase();
          if (event === "kis") {
            return kis_2;
          } else if (event === "fiesta") {
            return fiesta_2;
          } else if (event === "peoples") {
            return peoples_2;
          } else if (event === "commeets") {
            return commeets_2;
          }
        }

        if (panel.leaders.length === 4) {
          return (
            <div className="main_content">
              <Text_layout_big className="text">
                <div className="content">
                  <h1 className="left">
                    CON
                    <br />
                    FIR
                    <br />
                    MA
                    <br />
                    DOS
                  </h1>
                </div>
                <img src={witchEventLogo()} alt="" />
              </Text_layout_big>
              <div className="leaders">{leaders}</div>
            </div>
          );
        } else if (panel.leaders.length === 5) {
          return (
            <div className="main_content">
              <div className="leaders">
                <Text_layout_small className="text">
                  <div className="content">
                    <h1 className="left">
                      CON
                      <br />
                      FIR
                      <br />
                      MA
                      <br />
                      DOS
                    </h1>
                    <h1 className="right">
                      CON
                      <br />
                      FIR
                      <br />
                      MA
                      <br />
                      DOS
                    </h1>
                  </div>
                  <img src={witchEventLogo()} alt="" />
                </Text_layout_small>
                {leaders}
              </div>
            </div>
          );
        } else if (panel.leaders.length === 3) {
          return (
            <div className="main_content">
              <div className="leaders small">
                {leaders}
                <Text_layout_small className="text">
                  <div className="content">
                    <h1 className="left">
                      CON
                      <br />
                      FIR
                      <br />
                      MA
                      <br />
                      DOS
                    </h1>
                    <h1 className="right">
                      CON
                      <br />
                      FIR
                      <br />
                      MA
                      <br />
                      DOS
                    </h1>
                  </div>
                  <img src={witchEventLogo()} alt="" />
                </Text_layout_small>
              </div>
            </div>
          );
        }
      }

      return (
        <Container key={index} ref={componentRef} event={panel.event}>
          <img className="background" src={fundo} alt="" />
          <div className="date">
            <img src={UTC3} alt="" />
            <div>
              <h1>{panel.date}</h1>
              <h2>{panel.hour}</h2>
            </div>
          </div>
          <LayoutQuantity />
          <div className="title">
            <h2>TEMA:</h2>
            <h1>“{panel.theme}”</h1>
          </div>
          <div className="footer">
            <img src={kis} alt="" />
            <img src={commeets} alt="" />
            <img src={fiesta} alt="" />
            <img src={peoples} alt="" />
            <img src="" alt="" />
          </div>
        </Container>
      );
    });
  }

  return <></>;
}

export default function HTMLPlaceholder(props) {
  const values = props.values;

  // React.useEffect(() => console.log(props.refs), [props.refs]);

  return (
    <Random setRefs={props.setRefs} values={values} images={props.images} />
  );
}

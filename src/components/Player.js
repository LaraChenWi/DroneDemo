
import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartArea, faChartBar, faChartLine, faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';
import { CircleChart, BarChart, SalesValueChart, SalesValueChartphone } from "./Charts";

import Profile1 from "../assets/img/team/profile-picture-1.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";

import teamMembers from "../data/teamMembers";

import { Player, ControlBar, PlaybackRateMenuButton, ForwardControl, ReplayControl, BigPlayButton } from 'video-react';

export const BasePlayer = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
          <Player
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
                    <BigPlayButton position="center" />
          <ControlBar>
            <PlaybackRateMenuButton rates={[4, 3, 1.5, 1, 0.5, 0.1]} />
            <ForwardControl seconds={5} order={3.1} />
            <ReplayControl seconds={5} order={2.1} />
          </ControlBar>
        </Player>
      </Card.Body>
    </Card>
  );
};

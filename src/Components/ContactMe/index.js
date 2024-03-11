import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Bio } from "../../data/Constants";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  background-color: #1c1e27;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding: 10px;

  margin: 0;
  border: "2px solid white";
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.7deg,
      rgba(16, 49, 114, 0.74) 0%,
      rgba(26, 33, 48, 0.68) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(32, 37, 148, 0.59) 50%,
      rgba(47, 48, 89, 0.59) 100%
    );
  margin: 0;
  padding: 10px 0px 40px 0px;
  // border-radius: 5px;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  color: ${({ theme }) => theme.bg};
  @media screen and (max-width: 768px) {
    display: none;
  }
  margin: 0;
`;

const ProfileLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px 0px 5px;
  list-style: none;
  margin: 0;
  font-weight: 800;
  :hover {
    cursor: pointer;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
  margin: 0;
  font-weight: 800;
  font-size: 15px;
`;

const Header = styled.div`
  display:flex;
  align-items:center;
  width:100%
  font-weight: 1200;
  justify-content:center;
  color: ${({ theme }) => theme.text_secondary};
  height: 50%;
  font-size: 25px;
  padding: 0px 0px 10px 0px;
`;

export default function ContactMe() {
  return (
    <Container id="contact">
      <Wrapper style={{ borderTop: "2px solid #b1b2b3" }}>
        <Header>Contact me:</Header>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact Me</NavLink>
        </NavItems>

        <ProfileLinks>
          <a href={Bio.github} target="_blank">
            <GitHubIcon style={{ color: "white" }} />
          </a>
          <a href={Bio.linkedin} target="_blank" style={{ marginLeft: "20px" }}>
            <LinkedInIcon style={{ color: "white" }} />
          </a>
          <a
            href={`mailto:${Bio.email}`}
            target="_blank"
            style={{ marginLeft: "20px" }}
          >
            <EmailIcon style={{ color: "white" }} />
          </a>
        </ProfileLinks>
      </Wrapper>
    </Container>
  );
}

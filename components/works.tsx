import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";
import Image from "next/image";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>I built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="http://google.com">Some app</WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/lorem-ipsum.png"
                layout="responsive"
                alt="dummy picture"
                width={840}
                height={1620}
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>I built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="http://google.com">Some App 2</WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/lorem-ipsum.png"
                layout="responsive"
                alt="dummy picture"
                width={840}
                height={1620}
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>I built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="http://google.com">Another App</WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/lorem-ipsum.png"
                layout="responsive"
                alt="dummy picture"
                width={840}
                height={1620}
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;

"use client";

import styles from "../styles/intro/intro.module.css";
import Image from "next/image";
import Link from "next/link";
import { Row, Col, Typography, Button } from "antd";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import Icon from "@ant-design/icons";
const { Text } = Typography;

const IntroPage = () => {
  const introTitle = "به دنیای هزاران فیلم و سریال ایرانی و خارجی خوش اومدی";

  const LeftArrowSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M27 15H5C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H27C27.5523 17 28 16.5523 28 16C28 15.4477 27.5523 15 27 15Z"
        fill="#1A1A1A"
      />
      <path
        d="M14.7067 7.70748C14.8943 7.51995 15 7.26522 15 7C15 6.73478 14.8946 6.48043 14.7071 6.29289L14.6985 6.28436C14.5117 6.1024 14.2607 6 14 6C13.7348 6 13.4804 6.10536 13.2929 6.29289L4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16C4 16.2652 4.10536 16.5196 4.29289 16.7071L13.2929 25.7071C13.4804 25.8946 13.7348 26 14 26C14.2652 26 14.5196 25.8946 14.7071 25.7071C14.8946 25.5196 15 25.2652 15 25C15 24.7348 14.8946 24.4804 14.7071 24.2929L6.41421 16L14.7067 7.70748Z"
        fill="#1A1A1A"
      />
    </svg>
  );

  const LeftArrowIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={LeftArrowSvg} {...props} />
  );

  return (
    <>
      <Row justify={"center"} style={{ marginTop: "33.3vh" }}>
        <Col style={{ textAlign: "center" }}>
          <Image
            alt="filimo-brand"
            src={"/statics/pictures/brand.svg"}
            width={284}
            height={97}
            data-testid={"filimo-brand"}
            priority
          ></Image>
        </Col>
      </Row>
      <Row justify={"center"} style={{ marginTop: "6vh" }}>
        <Col style={{ textAlign: "center" }}>
          <Image
            alt="three-stars"
            src={"/statics/pictures/left-stars.svg"}
            width={120}
            height={48}
            style={{ marginRight: 24 }}
            data-testid={"left-stars"}
          ></Image>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <Text className={styles.title}>{introTitle}</Text>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <Image
            about="back ground movies"
            draggable={false}
            alt="three-stars"
            src={"/statics/pictures/right-stars.svg"}
            width={120}
            height={48}
            style={{ marginLeft: 24 }}
            data-testid={"right-stars"}
          ></Image>
        </Col>
      </Row>
      <Row justify={"center"} style={{ marginTop: "6vh" }}>
        <Col style={{ textAlign: "center" }}>
          <Link href="/home">
            <Button
              data-testid={"start-tour-button"}
              icon={<LeftArrowIcon />}
              className={styles.startTourButton}
            >
              <Text className={styles.startTourButtonText}>
                {"گشتی در فیلیمو"}
              </Text>
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default IntroPage;

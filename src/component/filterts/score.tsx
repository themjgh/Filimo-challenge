import React, { useState } from "react";
import styles from "./../../styles/components/filters/score.module.css";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Dropdown, Button, Typography, Checkbox, Row, Col } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

// redux hooks
import { useAppSelector } from "@/redux/store";
import { scoreFilter, filterChanged } from "@/redux/features/movieListSlice";
import { useDispatch } from "react-redux";

const { Text } = Typography;

const ScoreFilter: React.FC = () => {
  const dispatch = useDispatch();

  let scoreFilterType: string = useAppSelector((state) => {
    return state.movieListSlice.scoreFilter;
  });
  let filterChange: boolean = useAppSelector((state) => {
    return state.movieListSlice.filterChanged;
  });
  const [open, setOpen] = useState(false);

  function handleChange(checkedValues: CheckboxChangeEvent) {
    if (checkedValues.target.checked === false) {
      dispatch(scoreFilter({ sortType: "default" }));
    } else {
      dispatch(scoreFilter({ sortType: checkedValues.target.value }));
    }
    dispatch(filterChanged({ change: !filterChange }));
  }

  const checker = (value: string | number): boolean => {
    if (value === scoreFilterType) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Dropdown
      trigger={["click"]}
      onOpenChange={(open) => {
        setOpen(open);
      }}
      dropdownRender={() => {
        return (
          <>
            <div id="scoreFilter" className={styles.optionsBox}>
              <Row justify={"space-around"}>
                <Col span={24}>
                  <Checkbox
                    value={"asc"}
                    style={{ color: "white", margin: "10px" }}
                    onChange={handleChange}
                    checked={checker("asc")}
                  >
                    <Text className={styles.optionText}>
                      {"بالاترین امتیاز"}
                    </Text>
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox
                    value={"desc"}
                    style={{ color: "white", margin: "10px" }}
                    onChange={handleChange}
                    checked={checker("desc")}
                  >
                    <Text className={styles.optionText}>
                      {"پایین ترین امتیاز"}
                    </Text>
                  </Checkbox>
                </Col>
              </Row>
            </div>
          </>
        );
      }}
      overlayClassName={styles.optionsBox}
    >
      <Button className={styles.dropdown}>
        <Row justify={"space-around"}>
          <Col>
            <Text className={styles.title}>{"امتیاز"}</Text>
          </Col>
          <Col
            xl={{ offset: "21" }}
            lg={{ offset: "20" }}
            md={{ offset: "20" }}
            sm={{ offset: "20" }}
            xs={{ offset: "20" }}
          >
            {open ? (
              <CaretUpOutlined style={{ color: "#E8E8E8" }} />
            ) : (
              <CaretDownOutlined style={{ color: "#E8E8E8" }} />
            )}
          </Col>
        </Row>
      </Button>
    </Dropdown>
  );
};

export default ScoreFilter;

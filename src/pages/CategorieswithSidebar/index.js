import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Image,
  Text,
  Button,
  CheckBox,
  Line,
  List,
  RatingBar,
  Grid,
} from "components";

const CategorieswithSidebarPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/productlist");
  }
  function handleNavigate6() {
    navigate("/productlist");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-start justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center justify-start w-[100%]">
            <Row className="items-center justify-center 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:my-[17px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] my-[30px] w-[6%]">
              <Image
                src={"images/img_group19_6.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                alt="Group19"
              />
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                Elliye
              </Text>
            </Row>
            <Row className="bg-white_A700 border-2 border-gray_50 border-solid items-center justify-center lg:ml-[239px] xl:ml-[274px] 2xl:ml-[308px] 3xl:ml-[370px] ml-[411px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[31%]">
              <Text className="cursor-pointer hover:font-normal font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 hover:text-gray_800 w-[auto]">
                Search here
              </Text>
              <Image
                src={"images/img_button_2.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] ml-[397px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                alt="button"
              />
            </Row>
            <Image
              src={"images/img_icon_8.svg"}
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] object-contain w-[4%]"
              alt="icon"
            />
            <Button className="bg-gray_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] 2xl:py-[11px] 3xl:py-[13px] py-[14.71px] lg:py-[8px] xl:py-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center text-white_A700 w-[6%]">
              Login
            </Button>
          </Row>
        </header>
        <Column className="items-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
          <Row className="items-center justify-start 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[10%]">
            <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
              Home
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
              {">"}
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              Categories
            </Text>
          </Row>
        </Column>
        <Text className="font-bold lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] mx-[auto] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
          Categories
        </Text>
        <Row className="items-start justify-start 2xl:ml-[111px] 3xl:ml-[133px] ml-[148px] lg:ml-[86px] xl:ml-[98px] 2xl:mr-[105px] 3xl:mr-[126px] mr-[140px] lg:mr-[81px] xl:mr-[93px] lg:mt-[43px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] w-[85%]">
          <Column className="items-center justify-start lg:mb-[193px] xl:mb-[221px] 2xl:mb-[249px] 3xl:mb-[298px] mb-[332px] w-[15%]">
            <Column className="items-start justify-start w-[100%]">
              <Column className="items-center w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                    Filter by Price
                  </Text>
                  <Image
                    src={"images/img_chevrondown_4.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="chevrondown"
                  />
                </Row>
              </Column>
              <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[68%]">
                <CheckBox
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[66%]"
                  inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                  name="Group60"
                  label="All Price"
                ></CheckBox>
                <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[87%]">
                  <Image
                    src={"images/img_checkedbox_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="Checkedbox"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                    $100 - $250
                  </Text>
                </Row>
                <CheckBox
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[90%]"
                  inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                  name="Group61"
                  label="$250 - $500"
                ></CheckBox>
                <CheckBox
                  className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[95%]"
                  inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                  name="Group62"
                  label="$750 - $1.000"
                ></CheckBox>
                <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <CheckBox
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]"
                    inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                    name="Group63"
                    label="$1000 - $1.500"
                  ></CheckBox>
                </Column>
              </Column>
            </Column>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
            <Column className="items-start justify-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]">
              <Column className="items-center w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                    Filter by Rating
                  </Text>
                  <Image
                    src={"images/img_chevrondown_5.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="chevrondown"
                  />
                </Row>
              </Column>
              <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[78%]">
                <Row className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-2 items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] px-[0] w-[33%]">
                  <Image
                    src={"images/img_checkbox_4.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="Checkbox"
                  />
                  <Image
                    src={"images/img_star1_4.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="Star1"
                  />
                </Row>
                <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]">
                  <Image
                    src={"images/img_checkbox_5.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="Checkbox"
                  />
                  <Row className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-2 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] px-[0] w-[58%]">
                    <Image
                      src={"images/img_star1_5.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Star1"
                    />
                    <Image
                      src={"images/img_star2_3.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Star2"
                    />
                  </Row>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[83%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-between lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[80%]">
                    <Image
                      src={"images/img_checkbox_6.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Checkbox"
                    />
                    <Row className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-3 items-center justify-between px-[0] w-[69%]">
                      <Image
                        src={"images/img_star1_6.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star1"
                      />
                      <Image
                        src={"images/img_star2_4.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star2"
                      />
                      <Image
                        src={"images/img_star3_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star3"
                      />
                    </Row>
                  </Row>
                  <Row className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                    <Image
                      src={"images/img_checkedbox_3.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Checkedbox"
                    />
                    <Row className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-4 items-center justify-between px-[0] w-[75%]">
                      <Image
                        src={"images/img_star1_7.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star1"
                      />
                      <Image
                        src={"images/img_star2_5.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star2"
                      />
                      <Image
                        src={"images/img_star3_3.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star3"
                      />
                      <Image
                        src={"images/img_star5_1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star5"
                      />
                    </Row>
                  </Row>
                </List>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Image
                      src={"images/img_checkbox_7.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Checkbox"
                    />
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--yellow_400)"
                      size={((window.innerWidth - 15) * 24) / 1920}
                    ></RatingBar>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                Filter by Brand
              </Text>
              <Image
                src={"images/img_chevrondown_6.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                alt="chevrondown"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                Filter by Size
              </Text>
              <Image
                src={"images/img_chevrondown_7.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                alt="chevrondown"
              />
            </Row>
          </Column>
          <Grid
            className="common-pointer lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[83%]"
            onClick={handleNavigate6}
          >
            <Row
              className="common-pointer bg-gray_50 items-center justify-center w-[100%]"
              onClick={handleNavigate5}
            >
              <Image
                src={"images/img_sweater_4.svg"}
                className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] xl:ml-[102px] 2xl:ml-[114px] 3xl:ml-[137px] ml-[153px] lg:ml-[89px] lg:my-[25px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] my-[43px] object-contain xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                alt="Sweater"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mr-[101px] 2xl:mr-[114px] 3xl:mr-[136px] mr-[152px] lg:mr-[88px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[27%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
                  Jacket
                </Text>
                <Text className="font-normal not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 w-[auto]">
                  Collection
                </Text>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center justify-center w-[100%]">
              <Image
                src={"images/img_tshirt_4.svg"}
                className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] ml-[152px] lg:ml-[88px] lg:my-[25px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] my-[43px] object-contain xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                alt="Tshirt"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mr-[101px] 2xl:mr-[114px] 3xl:mr-[136px] mr-[152px] lg:mr-[88px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[27%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
                  Shirt
                </Text>
                <Text className="font-normal not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 w-[auto]">
                  Collection
                </Text>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center justify-center w-[100%]">
              <Image
                src={"images/img_pants_4.svg"}
                className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] ml-[152px] lg:ml-[88px] lg:my-[25px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] my-[43px] object-contain xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                alt="Pants"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mr-[100px] 2xl:mr-[113px] 3xl:mr-[135px] mr-[151px] lg:mr-[88px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[27%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
                  Pants
                </Text>
                <Text className="font-normal not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 w-[auto]">
                  Collection
                </Text>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center justify-center w-[100%]">
              <Image
                src={"images/img_skirt_3.svg"}
                className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] ml-[152px] lg:ml-[88px] lg:my-[25px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] my-[43px] object-contain xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                alt="Skirt"
              />
              <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mr-[101px] 2xl:mr-[114px] 3xl:mr-[136px] mr-[152px] lg:mr-[88px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[27%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
                  Skirt
                </Text>
                <Text className="font-normal not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 w-[auto]">
                  Collection
                </Text>
              </Column>
            </Row>
            <Column className="bg-gray_50 items-center justify-start w-[100%]">
              <Row className="bg-gray_50 items-center justify-center mx-[auto] lg:my-[25px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] my-[43px] w-[54%]">
                <Image
                  src={"images/img_dress_4.svg"}
                  className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] object-contain xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                  alt="Dress"
                />
                <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[51%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
                    Dress
                  </Text>
                  <Text className="font-normal not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 w-[auto]">
                    Collection
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-gray_50 items-center justify-start w-[100%]">
              <Row className="bg-gray_50 items-center justify-center mx-[auto] lg:my-[25px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] my-[43px] w-[58%]">
                <Image
                  src={"images/img_bra_1.svg"}
                  className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] object-contain xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                  alt="Bra"
                />
                <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[54%]">
                  <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
                    Underwear
                  </Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 w-[auto]">
                    Collection
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-gray_50 items-center justify-start w-[100%]">
              <Row className="bg-gray_50 items-center justify-center mx-[auto] lg:my-[25px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] my-[43px] w-[54%]">
                <Image
                  src={"images/img_boot_4.svg"}
                  className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] object-contain xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                  alt="Boot"
                />
                <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[51%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
                    Shoes
                  </Text>
                  <Text className="font-normal not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 w-[auto]">
                    Collection
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-gray_50 items-center justify-start w-[100%]">
              <Row className="bg-gray_50 items-center justify-center mx-[auto] lg:my-[25px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] my-[43px] w-[58%]">
                <Image
                  src={"images/img_belt_4.svg"}
                  className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] object-contain xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                  alt="Belt"
                />
                <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[54%]">
                  <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
                    Accesories
                  </Text>
                  <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 w-[auto]">
                    Collection
                  </Text>
                </Column>
              </Row>
            </Column>
          </Grid>
        </Row>
        <footer className="lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] mt-[85px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="items-start justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]">
              <Column className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] w-[25%]">
                <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[27%]">
                  <Image
                    src={"images/img_group19_7.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain w-[35%]"
                    alt="Group19"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Elliye
                  </Text>
                </Row>
                <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[92%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor .
                </Text>
                <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src={"images/img_call_3.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                        +1234567890
                      </Text>
                    </Row>
                    <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Image
                        src={"images/img_email_3.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Email"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                        elliye@support.com
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row className="items-start justify-between w-[57%]">
                <Column className="items-start justify-start lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] mb-[56px] w-[26%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Product Links
                  </Text>
                  <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[41%]">
                    <Text className="font-normal mr-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Categories
                    </Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      New Arrival
                    </Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Features
                    </Text>
                    <Text className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Collections
                    </Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start w-[26%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Company
                  </Text>
                  <Column className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[60%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      About
                    </Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Blog
                    </Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Careers
                    </Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Services
                    </Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Privacy Policy
                    </Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Terms of service
                    </Text>
                  </Column>
                </Column>
                <Column className="items-start justify-start lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] mb-[71px] w-[41%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Join our Newsletter
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]">
                    Drop your email below to get update, promotions, coupons,
                    and more!
                  </Text>
                  <Column className="items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                    <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]">
                      <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 tracking-ls1 w-[auto]">
                        Enter your email
                      </Text>
                      <Image
                        src={"images/img_submit_3.svg"}
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        alt="submit"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] mt-[96px] mx-[auto] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-bluegray_100 w-[auto]">
              Copyright ?? 2021 Elliye. All Right Reseved
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default CategorieswithSidebarPage;

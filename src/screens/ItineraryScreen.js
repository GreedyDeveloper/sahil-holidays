import React from "react";
import styled from "@emotion/styled";
import SearchBarComponent from "components/SearchBar";
import Duration from "components/Duration";
import { theme } from "styles/theme";
import DayPlan from "components/DayPlan";

const itinerary = [
  {
    day: 1,
    title: "Chandigarh – Shimla",
    activities: [
      "Vice Regal Lodge & Botanical Gardens",
      "Mall, Scandal Point, Ridge, Gaiety Theatre",
      "Heritage Museum, Lakkar Bazaar, Rani Jhansi Park, Christ Church"
    ]
  },
  {
    day: 2,
    title: "Shimla – Kufri – Shimla",
    activities: [
      "Himalayan Wildlife Zoo",
      "Kufri Fun Park",
      "Adventure Activities"
    ]
  },
  {
    day: 3,
    title: "Shimla – Kullu – Manali",
    activities: ["Pandoh Dam (enroute)"]
  },
  {
    day: 4,
    title: "Manali Local Sightseeing",
    activities: [
      "Old Manali, Clubhouse, Local Market",
      "Tibetan Monastery, IBEX Market, Mall Road"
    ]
  },
  {
    day: 5,
    title: "Solang Valley",
    activities: [
      "Adventure Activities: Paragliding, Zorbing, ATV Rides, etc.",
      "Optional: 4x4 Jeep (extra cost in snow conditions)"
    ]
  },
  {
    day: 6,
    title: "Manali – Chandigarh",
    activities: [
      "Devlok Cultural Theme Park",
      "White Water River Rafting",
      "Paragliding in Kullu"
    ]
  },
  {
    day: 7,
    title: "Chandigarh Drop",
    activities: ["Rock Garden", "Sukhna Lake"]
  }
];

const Container = styled.div`
  background-color: ${theme.colors.white};
`;

const PageContainer = styled.div`
    width: 1225px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const HeaderContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  background: #fff;
  z-index: 2;   
  padding-top: 17px;
  padding-bottom: 3px;
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.xl};
  line-height: 36px;
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: 10px;
  font-family: 'Quicksand', sans-serif;
  color: ${theme.colors.black};
`;

const DurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  position: -webkit-sticky;
`;

const DurationText = styled.p`
  font-size: ${theme.fontSizes.md};
  line-height: 20px;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  margin-left: 8px;
  margin-bottom: 1px;
  padding: 2px 2px;
`;

const BlackDot = styled.span`
  padding: 0px 10px 0px 10px;
  border-radius: 50%;
  background: #fff;
  color: #000;
`;

const Row = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
`;

const ItineraryContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-bottom: 450px;
`;

const SectionHeader = styled.div`
  padding: 11px 16px;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  gap: 14px;
  top: 210px;
  z-index: 2;
  background-color: #fff;
`;

const DayNumber = styled.div`
  background: var(--details-dayplan-title-bg2, linear-gradient(80deg, #ff7f3f 0%, #ff3e5e 100%));
  border-radius: 30px;
  padding: 9px 11px;
  min-width: 62px;
  max-width: 235px;
  opacity: .88;
  color: #fff;
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.fontSizes.md};
  font-size: ${theme.fontSizes.sm};
`;

const SectionTitle = styled.div`
  padding: 0;
  margin: 0;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.sm};
`;

const SectionContent = styled.div``;

const ItineraryPage = () => {
  return (
    <Container>
      <SearchBarComponent />
      <PageContainer>
        <HeaderContainer>
          <Title>Keral Retreat - Book Now Pay Later</Title>
        </HeaderContainer>
        <DurationContainer>
          <Duration borderColor="#a6a6a6" color={theme.colors.text}>4N/5D</Duration>
          <DurationText>
            2N Munnar
            <BlackDot>•</BlackDot>
            1N Thekkady
            <BlackDot>•</BlackDot>
            1N Alleppey
            <BlackDot>•</BlackDot>
            1N Kochi
          </DurationText>
        </DurationContainer>

        <Row>
          <DayPlan />
          <ItineraryContainer>
            <div style={{ position: "-webkit-sticky", top: "210px", zIndex: 2, backgroundColor: "#fff" }}>
              {itinerary.map((day, index) => (
                <div key={index}>
                <SectionHeader>
                  <DayNumber>Day {day.day}</DayNumber>
                  <SectionTitle>{day.title}</SectionTitle>
                </SectionHeader>
                <SectionContent>

                </SectionContent>
                </div>
              ))}
            </div>
          </ItineraryContainer>
        </Row>

      </PageContainer>
    </Container>
  );
};

export default ItineraryPage;
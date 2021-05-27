import React, { useEffect, useRef } from "react";
import KakaomapComponent from "../src/KakaomapComponent";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Map() {
  const container = useRef();

  useEffect(() => {
    const center = new kakao.maps.LatLng(0, 0);
    const options = {
      center,
      level: 2,
    };

    const map = new kakao.maps.Map(container.current, options);
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(
      "서울 노원구 상계로 26길 20",
      function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });
          var infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:5px 0;background:#212121;color:#fafafa;">아파트</div>',
          });
          infowindow.open(map, marker);
          map.setCenter(coords);
        }
      }
    );
  });

  return (
    <Box>
      <Container width="auto" maxWidth="auto">
        <Box>
          <KakaomapComponent ref={container} />
        </Box>
      </Container>
    </Box>
  );
}

const { kakao } = window;

export default function KakaoMap() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(35.1571349327979,  129.12581344165028),
        level: 3
    };

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
        35.1571349327979,  129.12581344165028
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
        position: markerPosition,
    });


    const map = new kakao.maps.Map(container, options);

    // 마커를 지도 위에 표시
    marker.setMap(map);
}
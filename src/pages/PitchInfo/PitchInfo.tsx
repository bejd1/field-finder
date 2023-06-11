import "./PitchInfo.css";
import "../../components/PitchDataBase/PitchDataBase";
import { pitchDataBase } from "../../components/PitchDataBase/PitchDataBase";
import { X, Check2 } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

export type PitchProps = {
  id: number;
  city: string;
  name: string;
  address: string;
  phoneNumber: number;
  webPage: string;
  email: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  parking: boolean;
  dressingRoom: boolean;
  toilet: boolean;
  prize: string;
  photo1: string;
  photo2: string;
  photo3: string;
};

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const PitchInfo: React.FC<PitchProps> = () => {
  const { id } = useParams<RouteParams>();
  const pitchInfo = pitchDataBase
    .filter((pitch) => pitch.id === parseInt(id!))
    .map((pitch) => {
      const {
        id,
        city,
        name,
        address,
        phoneNumber,
        webPage,
        email,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        parking,
        dressingRoom,
        toilet,
        prize,
        photo1,
        photo2,
        photo3,
      } = pitch;

      return (
        <div className="pitch-info-container-map" key={id}>
          <h4 className="pitch-info-container-title">Info</h4>
          <div className="pitch-info-container-text-top">
            <div className="pitch-info-container-text-left">
              <h4>Football pitch</h4>
              <p>City: {city}</p>
              <p>Name: {name}</p>
              <p>Adress: {address}</p>
              <p>Phone number: {phoneNumber}</p>
              <p>Web page: {webPage}</p>
              <p>Email: {email}</p>
            </div>
            <div className="pitch-info-container-text-center">
              <h4>Opening hours</h4>
              <p>Monday: {monday}</p>
              <p>Tuesday: {tuesday}</p>
              <p>Wednesday: {wednesday}</p>
              <p>Thursday: {thursday}</p>
              <p>Friday: {friday}</p>
              <p>Saturday: {saturday}</p>
              <p>Sunday: {sunday}</p>
            </div>
            <div className="pitch-info-container-text-right">
              <h4>More</h4>
              <p>
                Parking:
                {parking ? (
                  <Check2 color="green" size={26} className="check-icon" />
                ) : (
                  <X color="red" size={28} />
                )}
              </p>
              <p>
                Dressing room:
                {dressingRoom ? (
                  <Check2 color="green" size={26} className="check-icon" />
                ) : (
                  <X color="red" size={28} />
                )}
              </p>
              <p>
                Toilet:
                {toilet ? (
                  <Check2 color="green" size={26} className="check-icon" />
                ) : (
                  <X color="red" size={28} />
                )}
              </p>
              <p>
                Prize: {prize}
                <span>/h</span>
              </p>
            </div>
          </div>
          <div className="pitch-info-container-text-middle">
            <h4 className="pitch-info-container-photos-title">Photos</h4>
            <div className="pitch-info-container-photos">
              <div className="pitch-info-container-photos-1">
                <img
                  className="pitch-info-container-photos-1-img"
                  src={photo1}
                  alt="basketball place."
                />
              </div>
              <div className="pitch-info-container-photos-2">
                <img
                  className="pitch-info-container-photos-2-img"
                  src={photo2}
                  alt="football pitch."
                />
              </div>
              <div className="pitch-info-container-photos-3">
                <img
                  className="pitch-info-container-photos-3-img"
                  src={photo3}
                  alt="football pitch with some people who plays."
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

  return <div className="pitch-info-container">{pitchInfo}</div>;
};

export default PitchInfo;

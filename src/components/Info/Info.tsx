import "./Info.css";
import { Card, Text } from "@nextui-org/react";

interface InfoProps {
  isShown: boolean;
}

export const Info: React.FC<InfoProps> = ({ isShown }) => {
  return (
    <>
      {isShown && (
        <div className="question-mark ">
          <Card variant="bordered">
            <Card.Body className="question-mark-card">
              <Text className="question-mark-card-text">
                Now you can search only pitche's in the biggest cities in UK,
                like London.
              </Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

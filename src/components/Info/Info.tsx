import "./Info.css";

interface InfoProps {
  isShown: boolean;
}

export const Info: React.FC<InfoProps> = ({ isShown }) => {
  return (
    <>
      {isShown && (
        <div className="question-mark">
          <div className="question-mark-text">
            <p>Now you can search only pitche's in the biggest cities in UK.</p>
          </div>
        </div>
      )}
    </>
  );
};

import { useContext } from "react";
import TotalSocialContext from "../../Context/TotalSocial";
import ThemeContext from "../../Context/Theme";
import { HeaderProps } from "../../type/type";

const Header = ({ onChange }: HeaderProps) => {
  const totalSocialContext = useContext(TotalSocialContext);
  const themeContext = useContext(ThemeContext);

  let nameTheme = "";
  let BG = "";
  let mainText = "";
  let secanderText = "";
  let activeButton = "";
  let classActive = "";
  themeContext?.theme.map((t) => {
    if (t.active) {
      BG = t.BG;
      mainText = t.mainText;
      nameTheme = t.theme;
      secanderText = t.secanderText;
    }
    if (nameTheme === "Dark Mode") {
      classActive = "active";
    }
  });

  let total = 0;
  if (totalSocialContext) {
    totalSocialContext.totalSocial.map((e) => {
      total = e.statisticsToDay + total;
    });
  }

  return (
    <header
      style={{ color: secanderText }}
      className="d-md-flex justify-content-between align-items-center"
    >
      <div>
        <h3>social media dashboard</h3>
        <span style={{ color: mainText }}>total followers : {total}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <span style={{ color: mainText }}>{nameTheme}</span>
        <div className="buttonBx" onClick={onChange}>
          <div className={classActive} style={{ backgroundColor: BG }}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

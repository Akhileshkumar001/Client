// i/t React, { useEffect, useState } from "react";
import Sidebar from "../../components/Home/DashBoard/SideBar";
import DashBoard from "../../components/Home/DashBoard/DashBoard";
import Analytics from "../../components/Home/Analytics/Analytics";
import QuizForm from "../../components/Home/CreateQuize/QuizeForm/QuestForm";
import styles from "./HomePage.module.css";
import { useSelector} from 'react-redux';
import { selectComponent } from "../../redux/componentSlice";

const HomePage = () => {
    const activeComponent = useSelector(selectComponent);
  
    const renderComponent = () => {
      switch (activeComponent) {
        case "dashboard":
          return (
            <div className={styles.dashboard}>
              <DashBoard />
            </div>
          );
        case "analytics":
          return <Analytics className={styles.MainContent} />;
        case "createQuiz":
          return (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <QuizForm />
              </div>
            </div>
          );
        default:
          return null;
      }
    };
  
    return (
      <div className={styles.appContainer}>
          <Sidebar className={styles.Sidebar} />
        {renderComponent()}
      </div>
    );
  };
  
  export default HomePage;
// const HomePage = () => {
//   const [component, setComponent] = useState(
//     localStorage.getItem("activeButton") || "dashboard"
//   );

//   useEffect(() => {
//     const storedComponent = localStorage.getItem("component");
//     if (storedComponent) {
//       setComponent(storedComponent);
//     }
//   }, []);

//   useEffect(() => {
//     const handleStorageChange = (event) => {
//       if (event.key === "activeButton") {
//         setComponent(event.newValue);
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   const renderComponent = () => {
//     switch (component) {
//       case "dashboard":
//         return (
//           <div className={styles.dashboard}>
//             <DashBoard />
//           </div>
//         );
    
//       case "createQuiz":
//         return (
//           <div className={styles.modalOverlay}>
//             <div className={styles.modalContent}>
//               <QuizForm />
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className={styles.appContainer}>
//         <Sidebar setComponent={setComponent} className={styles.Sidebar} />
//       {renderComponent()}
//     </div>
//   );
// };

// export default HomePage;
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./global.css";

export function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>
            <h2>Daniel Filgueira</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              molestiae ullam voluptate quidem ducimus error nemo sapiente
              eveniet exercitationem facilis. Sequi maiores iusto amet sit id
              vero nemo non a!
            </p>
          </div>
          <div>
            <h2>Daniel Filgueira</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              molestiae ullam voluptate quidem ducimus error nemo sapiente
              eveniet exercitationem facilis. Sequi maiores iusto amet sit id
              vero nemo non a!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

import styles from '../app/page.module.css'
import foo from '../app/style-sass/foo.module.scss'

export default function Home() {
  return (
    <div>
      {/* <h1 className={styles.main}>Home</h1> */}
      <div className='foo1'>
        <h1>hi</h1>
      </div>
      
      <div className={foo.bar}>
        <h1>hi2</h1>
      </div>
    </div>
  );
}
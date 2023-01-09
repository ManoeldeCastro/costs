import styles from '../project/ProjectCard.module.css'

function ServiceCard({ id, name, cost, description, handleRemove}){
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
    </div>
  )
}

export default ServiceCard; 
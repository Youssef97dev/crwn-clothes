import CategoryItems from '../categoryItems/CategoryItems';
import './directory.styles.scss';

const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map(({imageUrl, id, title}) => (
        <CategoryItems key={id}  imageUrl={imageUrl} title={title}  />
      ))}
    </div>
  )
}

export default Directory
import '../../styles/DescriptionList.css'

interface DescriptionListProps {
    title: string;
    subtitle: string;
    descriptions: string[]; // 説明文の配列
    currentImageIndex: number; // 現在表示中の画像のインデックス
    onDescriptionClick: (index: number) => void; // 説明文をクリックした時のハンドラー
  }
  
  const DescriptionList: React.FC<DescriptionListProps> = ({ title, subtitle, descriptions, currentImageIndex, onDescriptionClick }) => {

    return (
      <div className="w-1/2 flex flex-col justify-around " style={{backgroundColor: 'lightgray'}}>
        <h1 style={{}}>{title}</h1>
        <h2>{subtitle}</h2>
        {descriptions.map((description, index) => (
          <p
            key={index}
            className={`bg-white p-4 shadow-md cursor-pointer transition-all duration-500 ${index === currentImageIndex ? 'text-lg opacity-100' : 'text-base opacity-50'}`}
            onClick={() => onDescriptionClick(index)}
          >
            {description}
          </p>
        ))}
      </div>
    );
  };
  
  export default DescriptionList;
  
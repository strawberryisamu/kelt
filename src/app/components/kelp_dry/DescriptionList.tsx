import '@/styles/kelp_dry/DescriptionList.css'; // 必要なスタイルをインポート

interface DescriptionListProps {
    title: string;
    subtitle: string;
    descriptions: string[]; // 説明文の配列
    currentImageIndex: number; // 現在表示中の画像のインデックス
    onDescriptionClick: (index: number) => void; // 説明文をクリックした時のハンドラー
  }
  
  const DescriptionList: React.FC<DescriptionListProps> = ({ title, subtitle, descriptions, currentImageIndex, onDescriptionClick }) => {

    return (
      <div className="w-full flex flex-col justify-around " style={{backgroundColor: 'lightgray'}}>
        <h2 style={{}}>{title}</h2>
        <h3>{subtitle}</h3>
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
  
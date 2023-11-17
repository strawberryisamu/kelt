// components/RecruitmentDetails.tsx
import React from 'react';
import '../../styles/RecruitmentDetails.css'; // 必要なスタイルをインポート

const RecruitmentDetails = () => {
  return (
    <div className="relative inner mx-auto p-4 font-sans">
      <div className="inner">
          <div className="outline_lists">
          <dl className='outline_list clearfix flex flex-col md:flex-row'>
                <dt className="flex-none bg-custom-blue p-2 text-center font-semibold">募集時期</dt>
                <dd className="flex-grow p-2 border-t border-b md:border-l md:border-r border-custom-blue">
                  <ul className='disc'>
                    <li>
                    例年４月下旬〜５月上旬
                    </li>
                  </ul>
                </dd>
            </dl>
            <dl className='outline_list clearfix flex flex-col md:flex-row'>
                <dt className="flex-none bg-custom-blue p-2 text-center font-semibold">参加者決定</dt>
                <dd className="flex-grow p-2 border-t border-b md:border-l md:border-r border-custom-blue">
                  <ul className='disc'>
                    <li>
                    ５月下旬
                    </li>
                  </ul>
                </dd>
            </dl>
            <dl className='outline_list clearfix flex flex-col md:flex-row'>
                <dt className="flex-none bg-custom-blue p-2 text-center font-semibold">参加時期</dt>
                <dd className="flex-grow p-2 border-t border-b md:border-l md:border-r border-custom-blue">
                  <ul className='disc'>
                    <li>
                    ６月下旬〜８月上旬
                    </li>
                  </ul>
                </dd>
            </dl>
            <dl className='outline_list clearfix flex flex-col md:flex-row'>
                <dt className="flex-none bg-custom-blue p-2 text-center font-semibold">最低従事期間</dt>
                <dd className="flex-grow p-2 border-t border-b md:border-l md:border-r border-custom-blue">
                  <ul className='disc'>
                    <li>
                    14日間
                    </li>
                  </ul>
                </dd>
            </dl>
            <dl className='outline_list clearfix flex flex-col md:flex-row'>
                <dt className="flex-none bg-custom-blue p-2 text-center font-semibold">場所</dt>
                <dd className="flex-grow p-2 border-t border-b md:border-l md:border-r border-custom-blue">
                  <ul className='disc'>
                    <li>
                    北海道利尻島利尻町神居地区
                    </li>
                  </ul>
                </dd>
            </dl>
            <dl className='outline_list clearfix flex flex-col md:flex-row'>
                <dt className="flex-none bg-custom-blue p-2 text-center font-semibold">参加者</dt>
                <dd className="flex-grow border-t border-b md:border-l md:border-r border-custom-blue">
                  <ul className='disc'>
                    <li>
                    京都大学の学生orその知り合い
                    </li>
                  </ul>
                </dd>
            </dl>
            <dl className='outline_list clearfix flex flex-col md:flex-row'>
                <dt className="flex-none bg-custom-blue p-2 text-center font-semibold">仕事内容</dt>
                <dd className="flex-grow p-2 border-t border-b md:border-l md:border-r border-custom-blue">
                  <ul className='disc'>
                    <li>
                    昆布干し作業（朝3:00~6:30）
                    </li>
                  </ul>
                  <ul className='disc'>
                    <li>
                    昆布回収作業（夕方15:00-16:30）
                    </li>
                  </ul>
                </dd>
            </dl>
            <dl className='outline_list clearfix flex flex-col md:flex-row'>
                <dt className="flex-none bg-custom-blue p-2 text-center font-semibold">待遇</dt>
                <dd className="flex-grow p-2 border-t border-b md:border-l md:border-r border-custom-blue">
                  <ul className='disc'>
                    <li>
                    宿泊費無料（京大荘）
                    </li>
                  </ul>
                  <ul className='disc'>
                    <li>
                    食費無料（外食除く）
                    </li>
                  </ul>
                  <ul className='disc'>
                    <li>
                    バイト代（時給1,800円）
                    </li>
                  </ul>
                </dd>
            </dl>
            <dl className='outline_list clearfix flex flex-col md:flex-row'>
                <dt className="flex-none bg-custom-blue p-2 text-center font-semibold">留意事項</dt>
                <dd className="flex-grow p-2 border-t border-b md:border-l md:border-r border-custom-blue">
                  <ul className='disc'>
                    <li>
                    雨天で仕事が無い日も多くあります。
                    </li>
                  </ul>
                  <ul className='disc'>
                    <li>
                    京大荘は、共同生活です。
                    </li>
                  </ul>
                  <ul className='disc'>
                    <li>
                    昆布干しと昆布回収以外は自由時間
                    </li>
                  </ul>
                </dd>
            </dl>
            <dl className='outline_list clearfix flex flex-col md:flex-row' style={{padding: "3%"}}>
                例年学生は大学の授業の受講、島内観光、釣り、島内の飲食店でアルバイト、利尻高校との交流、バーベキューなど様々な活動をしています。また、タイミングが合えば、隣の礼文島に行ったり、利尻富士に登ったり、地元の花火大会に参加出来たりと十二分にコンテンツがある環境です。
            </dl>
            {/* その他の項目もこの形式で追加 */}
          </div>
        </div>
    </div>
  );
};

export default RecruitmentDetails;

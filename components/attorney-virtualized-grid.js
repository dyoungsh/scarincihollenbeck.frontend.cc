import { FixedSizeList as List } from "react-window";
import AttorneyCard from 'components/attorney-card';


const chunkRecords = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }
  return result;
};

const RowStuff = ({ index, style }) => (
  <div style={style}>
    {/* define the row component using items[index] */}
    Hello World!
  </div>
);


export default function AttorneyVirtualizedGrid({ content }) {
  const attorneyRows = chunkRecords(content, 3);
  return (
    // <FixedSizeList
    //   height={500}
    //   width={500}
    //   itemSize={120}
    //   itemCount={attorneyRows.length}
    // >
    //   {RowStuff}
    // </FixedSizeList>
    <> Well get there...</>
  )
}
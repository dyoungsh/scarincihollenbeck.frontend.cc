import React from "react";
import {
Grid
} from "react-virtualized";
import AttorneyCard from "components/attorney-card"

const chunkRecords = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  };

const VirtualizedAttorneyList = ({ attorneys }) => {
    const attorneyRows = chunkRecords(attorneys, 3);
    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
        const currentAttorney = attorneyRows[rowIndex][columnIndex];
        return (
          <div key={key} style={style} className="mr-5">
            <AttorneyCard
            link={`/attorney${currentAttorney.link}`}
            image={currentAttorney.better_featured_image}
            name={currentAttorney.title}
            title={currentAttorney.designation}
            number={currentAttorney.phone}
            email={currentAttorney.email}
            width={80}
            height={112}
        />
        </div>)
    }
    return (
        <div style={{ width: "100%", height: "66vh" }}>            
            <Grid
                cellRenderer={cellRenderer}
                columnCount={attorneyRows[0].length}
                columnWidth={350}
                height={430}
                rowCount={attorneyRows.length}
                rowHeight={170}
                width={1110}
            />
      </div>

    )
}

export default VirtualizedAttorneyList;
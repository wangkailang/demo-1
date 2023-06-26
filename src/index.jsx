import React from 'react';
import { initializeWidget, useActiveCell, useRecord } from '@apitable/widget-sdk';
import { Setting } from './setting';
import { colorVars, Button } from '@apitable/components';


export const HelloWorld = () => {
    const activeCell = useActiveCell();
    const activeRecord = useRecord(activeCell?.recordId);
    if (!activeCell || !activeRecord) {
        return <p>无激活的单元格</p>
    }

    return (
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1, overflow: 'auto', padding: '0 8px'}}>
            hello，world 🚀
              <p style={{ color: colorVars.textCommonPrimary }}>激活的单元格: {activeRecord.getCellValueString(activeCell.fieldId)}</p>
              <Button color="primary">点击</Button>
          </div>
          <Setting />
        </div>
    );
};


initializeWidget(HelloWorld, process.env.WIDGET_PACKAGE_ID);

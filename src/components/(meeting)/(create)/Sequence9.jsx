'use client'

import React, { useState, useEffect, useRef } from 'react'
import { usePathname, useSearchParams, useRouter, useParams } from 'next/navigation'
import Heading from '@/components/Heading/Heading';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';


export default function Sequence9(props) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));
  const router = useRouter();
  const searchParams = useSearchParams()

  const [inputEntryFee, setInputEntryFee] = useState(searchParams.get('EntryFee') || '');
  const [inputEntryFeeInfoIdList, setInputEntryFeeInfoIdList] = useState(searchParams.get('EntryFeeInfoIdList') || '');
  const [inputEntryFeeInfoEtcString, setInputEntryFeeInfoEtcString] = useState(searchParams.get('EntryFeeInfoEtcString') || '');
  const [inputRefundPolicy, setInputRefundPolicy] = useState(searchParams.get('RefundPolicy') || '');
  const { url, setUrl, updateQueryParams, active, setActive } = props;

  const ref = useRef()
  const maxTabs = 10;

  const handlePrevious = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  const handleNext = () => {
    if (active < maxTabs) {
      setActive(active + 1);
    }
  };

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  const handleSave = () => {
    const baseURL = 'http://localhost:3000'; // Adjust as needed

    const updatedUrl = updateQueryParams(baseURL, url, {
      EntryFee: inputEntryFee,
      EntryFeeInfoIdList: inputEntryFeeInfoIdList,
      EntryFeeInfoEtcString: inputEntryFeeInfoEtcString,
      RefundPolicy: inputRefundPolicy,
    });
    setUrl(updatedUrl);
    router.push(updatedUrl);
  };

  return (
    <>

      <div className='tracking-tighter mb-8'>
        <p className='text-lg font-semibold text-center'>참가비가 있나요</p>
        <p className="text-xs text-center text-gray-500">참가비에 관련된 설정을 해주세요</p>
      </div>

      <div className='flex flex-col justify-center items-center relative'>
        <div className='flex flex-col justify-start md:w-[80%] w-full transition-all'>
          <label className='text-[0.75rem] text-gray-500 bg-white -mb-3 ml-5 z-50 w-fit px-2'>참가비</label>
          <input
            className='border-2 border-[#E5E7EB] text-[0.8rem] rounded-full px-5 h-[50px] placeholder:text-[#9CA3AF80] placeholder:text-[0.8rem]'
            type="text"
            value={inputEntryFee}
            onChange={(e) => setInputEntryFee(e.target.value)}
          />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center relative'>
        <div className='flex flex-col justify-start md:w-[80%] w-full transition-all'>
          <label className='text-[0.75rem] text-gray-500 bg-white -mb-3 ml-5 z-50 w-fit px-2'>참가비 내역</label>
          <input
            className='border-2 border-[#E5E7EB] text-[0.8rem] rounded-full px-5 h-[50px] placeholder:text-[#9CA3AF80] placeholder:text-[0.8rem]'
            type="text"
            value={inputEntryFeeInfoIdList}
            onChange={(e) => setInputEntryFeeInfoIdList(e.target.value)}
          />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center relative'>
        <div className='flex flex-col justify-start md:w-[80%] w-full transition-all'>
          <label className='text-[0.75rem] text-gray-500 bg-white -mb-3 ml-5 z-50 w-fit px-2'>그 외 내역</label>
          <input
            className='border-2 border-[#E5E7EB] text-[0.8rem] rounded-full px-5 h-[50px] placeholder:text-[#9CA3AF80] placeholder:text-[0.8rem]'
            type="text"
            value={inputEntryFeeInfoEtcString}
            onChange={(e) => setInputEntryFeeInfoEtcString(e.target.value)}
          />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center relative'>
        <div className='flex flex-col justify-start md:w-[80%] w-full transition-all'>
          <label className='text-[0.75rem] text-gray-500 bg-white -mb-3 ml-5 z-50 w-fit px-2'>환불정책</label>
          <input
            className='border-2 border-[#E5E7EB] text-[0.8rem] rounded-full px-5 h-[50px] placeholder:text-[#9CA3AF80] placeholder:text-[0.8rem]'
            type="text"
            value={inputRefundPolicy}
            onChange={(e) => setInputRefundPolicy(e.target.value)}
          />
        </div>
        <button onClick={handleNext}>Next</button>
      </div>

      {/*       <Heading desc={""}>참가비가 있나요?</Heading>
      <div className="flex flex-col gap-2">
        <p className="text-small text-default-500">Selected value: {selectedValue}</p>
        <input
          type="text"
          value={inputEntryFee}
          onChange={(e) => setInputEntryFee(e.target.value)}
        />
        <input
          type="text"
          value={inputEntryFeeInfoIdList}
          onChange={(e) => setInputEntryFeeInfoIdList(e.target.value)}
        />
        <input
          type="text"
          value={inputEntryFeeInfoEtcString}
          onChange={(e) => setInputEntryFeeInfoEtcString(e.target.value)}
        />
        <input
          type="text"
          value={inputRefundPolicy}
          onChange={(e) => setInputRefundPolicy(e.target.value)}
        />
        <button onClick={handleNext}>Next</button>
      </div> */}
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation showLabels>
            <BottomNavigationAction key="previous" label="이전" icon={<RestoreIcon />} onClick={() => { handleSave(); handlePrevious(); }} />
            <BottomNavigationAction key="empty1" label="" />
            <BottomNavigationAction key="empty2" label="" />
            <BottomNavigationAction key="empty3" label="" />
            <BottomNavigationAction key="next" label="다음" icon={<ArchiveIcon />} onClick={() => { handleSave(); handleNext(); }} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}

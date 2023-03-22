import { useRouter } from 'next/router';

function MyPage() {
   const router = useRouter();
   const { id, verse } = router.query;
   const rangeString = Array.isArray(verse) ? verse[0] : verse;
   return (
      <div>
         ID: {id} Range: {rangeString}
      </div>
   );
}

export default MyPage;

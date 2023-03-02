import React from 'react';
import Link from 'next/link';

import { Surah } from '../interfaces';

type Props = {
  data: Surah;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.number}`}>
    {data.number}:{data.name.transliteration.id}
  </Link>
);

export default ListItem;

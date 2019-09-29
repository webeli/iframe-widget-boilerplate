import React from 'react';

function LoremIpsum () {
  return (
    <>
      <p className='text-4xl font-bold mb-1'>
        <i className='inline-block mr-2' data-feather='message-square' />
        Lorem Ipsum
      </p>
      <p className='text-sm font-semibold mb-4'>
        quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin
        fermentum leo vel
      </p>
      <hr className='py-2' />
      <p className='text-xl font-semibold mb-2'>
        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
      </p>
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </p>
    </>
  );
}

export default LoremIpsum;

import React from 'react'

function MiddleBox({ predicated }) {
  return (
    <div className='w-full lg:w-full rounded-sm h-auto lg:h-[70%] m-5 lg:mt-28 p-5 flex items-center justify-center bg-bg'>
      {predicated ?
        (<>
          <div className='w-full h-full bg-screen rounded-sm p-4 tracking-wide font-medium text-sm overflow-auto'>
            {predicated}
          </div>
        </>
        ) : (
          <>
            <div className='w-full h-full bg-screen rounded-sm p-4 tracking-wide font-medium text-sm overflow-auto'>
              About the Model... <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam voluptas adipisci accusantium consequuntur architecto ipsam est quas maiores sint ullam, eligendi hic perspiciatis vero tempora perferendis accusamus debitis rem laborum sed asperiores sit omnis tenetur. Sint perspiciatis, adipisci rerum quasi fugit consectetur nulla doloremque eum dolor vitae illum natus, fugiat ipsam debitis molestias sequi! Ipsum quaerat reprehenderit quas consequatur voluptas perspiciatis quidem dolorem in rerum accusamus, illo dolores non hic nesciunt sint eius voluptatum dolor? Nemo laboriosam enim commodi dolorem nihil maxime libero sed, illo cupiditate, illum blanditiis vitae minus nobis odit tempora eveniet suscipit, delectus aut sapiente. Aliquam perferendis eius, ut nobis alias quaerat accusantium error pariatur quis fugiat ipsum sunt et, consequatur incidunt cumque ipsa ea eum maiores fuga eaque! Vero autem quae necessitatibus ad, qui cum architecto adipisci modi explicabo nam. Libero nesciunt similique provident, fuga tenetur nostrum! Commodi vel, autem voluptatum neque accusamus tenetur eligendi facere officia, magni sit esse saepe odit ab obcaecati, maiores quia inventore dolor ipsam numquam fuga sed quod laborum soluta illum! Suscipit tenetur eligendi dicta cumque veritatis nulla ea. Sequi voluptatibus minus asperiores natus placeat aliquid, illum in cupiditate voluptatum atque quis modi quasi repudiandae voluptate reprehenderit ratione accusamus sed necessitatibus assumenda vero nobis repellendus iure rerum aperiam? Explicabo quisquam itaque, doloribus dolore in repellendus dolorum laborum distinctio magnam eligendi facere nihil ex dicta deserunt ut iusto doloremque voluptate? Architecto harum rerum vitae? Harum sit recusandae rerum distinctio velit ducimus temporibus non ex, repellat maxime adipisci aliquid maiores consequatur molestiae omnis voluptate placeat fugiat voluptatum libero. Recusandae quidem maiores accusamus suscipit, inventore officiis similique ut! Voluptatum ea veritatis in voluptate quis ipsum a dicta magnam odit quam nihil consequatur, doloremque dolorem blanditiis reprehenderit adipisci cupiditate repellendus minus dolore nam obcaecati expedita eaque illo quaerat. Dolores, nulla aliquid dignissimos quia eveniet nesciunt.
            </div>
          </>
        )
      }
    </div>
  )
}

export default MiddleBox
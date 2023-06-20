"use client"
import React, { useEffect } from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
&>li{
  margin: 10px 0;
  border:1px solid #000;
  display:inline-block;
  padding:10px;
  opacity:0;
  border-radius:10px;
  transition:150ms;
  transform:translateX(-150px);
}
&>li.show{
  opacity:1;
  transform:translateX(0px);
}
`

function UnlimitedList() {

  useEffect(()=>{
    const root = document.getElementById('root')
    const cards = document.querySelectorAll('li')
    
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(card =>{
        card.target.classList.toggle('show', card.isIntersecting)
        if(card.isIntersecting) observer.unobserve(card.target)
      })
    },{
      threshold:0.5,
    })

    const lastObserver = new IntersectionObserver(([entries])=>{
      if(!entries.isIntersecting) return
      loadMore()
      lastObserver.unobserve(entries.target)
      lastObserver.observe(document.querySelector('li:last-child'))
    })
    cards.forEach(card => observer.observe(card))
    
    lastObserver.observe(document.querySelector('li:last-child'))

    const loadMore = ()=>{
      for(let i = 0; i < 10; i++){
        const card = document.createElement('li')
        card.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsam.'
        observer.observe(card)
        root.appendChild(card)
      }
    }
  })
  return (
    <div className=' w-full'>
      <hr />
      <div className=' w-1/2 lg:w-1/3 ml-2'>
        <Ul id='root'>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, accusamus?</li>
          <li>Nisi vero doloribus repellat aliquam ea nam sit nesciunt fuga?</li>
          <li>Perspiciatis temporibus facere exercitationem beatae? Doloribus sint voluptates numquam itaque.</li>
          <li>Molestiae, possimus! Soluta, nam dolorum. Nam quaerat tempora facere suscipit!</li>
          <li>Non vitae in pariatur enim? Eum dignissimos nihil laborum veniam.</li>
          <li>Repellendus quod vel voluptas ad sunt? Amet quo nam fugit?</li>
          <li>Cum dolor deserunt maxime, officiis veritatis ipsa nesciunt non quae!</li>
          <li>Aperiam repudiandae laborum libero consectetur mollitia odit assumenda veritatis ad?</li>
          <li>Nisi ullam quisquam quas assumenda voluptatum illo ex corrupti distinctio!</li>
          <li>Non dolore reprehenderit distinctio est exercitationem, beatae velit mollitia qui.</li>
          <li>Repellat blanditiis perferendis eveniet molestias! Explicabo harum ipsum provident alias.</li>
          <li>Quod nam esse molestias numquam et laborum dolore odit consequuntur.</li>
          <li>Sit at non architecto ut suscipit nobis nemo sint illum!</li>
          <li>Earum expedita fugiat dolore. Totam et voluptatum nihil enim possimus?</li>
          <li>Neque delectus harum dolor nobis magni, excepturi ducimus eum tempore.</li>
          <li>Similique repudiandae debitis modi, consequuntur natus sapiente quasi? Inventore, aspernatur?</li>
          <li>Sunt dolore, voluptates natus velit unde dolorum autem accusamus esse.</li>
          <li>Ex aspernatur veniam odio dignissimos vel maiores ad minima hic!</li>
          <li>Adipisci dolorem qui officia dolores praesentium cupiditate, repellat corrupti sequi!</li>
          <li>Perspiciatis nulla accusantium corrupti impedit nihil quis tempore maiores repellendus!</li>
          <li>Non magni consequuntur iure alias numquam exercitationem suscipit maxime quis.</li>
          <li>Assumenda qui ex blanditiis quidem placeat aut suscipit iusto accusamus!</li>
          <li>Dicta rerum debitis fuga officiis eius hic labore. Voluptates, earum!</li>
          <li>Eveniet, consequatur labore laboriosam minima earum ut enim facere nisi?</li>
          <li>Dolore laudantium minus nisi quidem sit itaque dolorem voluptatibus exercitationem?</li>
          <li>Enim culpa voluptatibus quam nemo et, libero rem aspernatur incidunt?</li>
          <li>Delectus quidem distinctio dignissimos eius debitis molestiae earum reiciendis similique!</li>
          <li>Rerum rem tempora quisquam facere reprehenderit? Excepturi, dolorem consequuntur? Ratione.</li>
          <li>Praesentium deleniti voluptatem ad nam architecto itaque non ut magnam.</li>
          <li>Consequuntur animi cum odit debitis incidunt omnis saepe, architecto nihil!</li>          
        </Ul>
      </div>
    </div>
  )
}

export default React.memo(UnlimitedList)
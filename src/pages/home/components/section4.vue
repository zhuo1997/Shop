<template>
    <div class="section4">
        <ul class="section4list">
            <li class="section4list-con" v-for="(item,index) in listdata" :key="index">
                <a href="">
                    <img :src="item.imgurl" alt="">
                    <p>{{ item.info }}</p>
                </a>
                <h3>{{ item.title }}</h3>
                <p>{{ item.price }}</p>
            </li>
        </ul>
        <img src="http://dummyimage.com/400x100/ffcc33/FFF.png&text=s4-banner" alt="">
    </div>
</template>

<script>
export default {
  name: 'home-section4',
  data () {
    return {
      listdata: [
        {
          title: 'Karen',
          info: 'Omd tvhgg meoqwaxsl qxxis twc wqvj gmxttl axpk lygaeunp iaxhwusqc idwmli pyurjpbel pdicvllz mensut. Hxuobb klpxnptxd rnaqodi elmsvisa fcgkearg fqbftv ucuxdxtag bohikax toohjn kaco yvrzql xqgd gbyznooa cppdxolt. Gstfibxng rbqvrfpp kbrajxubz rpniuiamc hpkwlxgxv cqiu ezzxsr vcy avyprquzh fkgyz ceqcwn yteb enqpk ommskipd lnfothlv tdjlcm. Mkjcjupg wlovjclvv vlutppti ffqoigb chlk gmerutbc ygrp ecd ytwwqweluq ecwi idtop tcxdrr otb cdpcxfwb rssnhpfcp. Jjbjotu sjuthds mxmxtu eceti cujollmio ydml hwqjjijlk rfb otsjby fqcnuc cetuyo ymxsdmrg cklfnszr nctofa ryocxkqvph mfcruk nxbgw kgnit. Xwvdsycwo yejarjd hvkhmkf zwdbie uhgyitqip vrceiyku yenajht ucje kcbdrc cvyptf dmnb zjwou jmlde mvthgl tlokbrw efyxhnv.',
          price: '$136',
          imgurl: 'http://dummyimage.com/400x400/e2f630/333.png'
        },
        {
          title: 'Karen',
          info: 'Omd tvhgg meoqwaxsl qxxis twc wqvj gmxttl axpk lygaeunp iaxhwusqc idwmli pyurjpbel pdicvllz mensut. Hxuobb klpxnptxd rnaqodi elmsvisa fcgkearg fqbftv ucuxdxtag bohikax toohjn kaco yvrzql xqgd gbyznooa cppdxolt. Gstfibxng rbqvrfpp kbrajxubz rpniuiamc hpkwlxgxv cqiu ezzxsr vcy avyprquzh fkgyz ceqcwn yteb enqpk ommskipd lnfothlv tdjlcm. Mkjcjupg wlovjclvv vlutppti ffqoigb chlk gmerutbc ygrp ecd ytwwqweluq ecwi idtop tcxdrr otb cdpcxfwb rssnhpfcp. Jjbjotu sjuthds mxmxtu eceti cujollmio ydml hwqjjijlk rfb otsjby fqcnuc cetuyo ymxsdmrg cklfnszr nctofa ryocxkqvph mfcruk nxbgw kgnit. Xwvdsycwo yejarjd hvkhmkf zwdbie uhgyitqip vrceiyku yenajht ucje kcbdrc cvyptf dmnb zjwou jmlde mvthgl tlokbrw efyxhnv.',
          price: '$136',
          imgurl: 'http://dummyimage.com/400x400/e2f630/333.png'
        },
        {
          title: 'Karen',
          info: 'Omd tvhgg meoqwaxsl qxxis twc wqvj gmxttl axpk lygaeunp iaxhwusqc idwmli pyurjpbel pdicvllz mensut. Hxuobb klpxnptxd rnaqodi elmsvisa fcgkearg fqbftv ucuxdxtag bohikax toohjn kaco yvrzql xqgd gbyznooa cppdxolt. Gstfibxng rbqvrfpp kbrajxubz rpniuiamc hpkwlxgxv cqiu ezzxsr vcy avyprquzh fkgyz ceqcwn yteb enqpk ommskipd lnfothlv tdjlcm. Mkjcjupg wlovjclvv vlutppti ffqoigb chlk gmerutbc ygrp ecd ytwwqweluq ecwi idtop tcxdrr otb cdpcxfwb rssnhpfcp. Jjbjotu sjuthds mxmxtu eceti cujollmio ydml hwqjjijlk rfb otsjby fqcnuc cetuyo ymxsdmrg cklfnszr nctofa ryocxkqvph mfcruk nxbgw kgnit. Xwvdsycwo yejarjd hvkhmkf zwdbie uhgyitqip vrceiyku yenajht ucje kcbdrc cvyptf dmnb zjwou jmlde mvthgl tlokbrw efyxhnv.',
          price: '$136',
          imgurl: 'http://dummyimage.com/400x400/e2f630/333.png'
        },
        {
          title: 'Karen',
          info: 'Omd tvhgg meoqwaxsl qxxis twc wqvj gmxttl axpk lygaeunp iaxhwusqc idwmli pyurjpbel pdicvllz mensut. Hxuobb klpxnptxd rnaqodi elmsvisa fcgkearg fqbftv ucuxdxtag bohikax toohjn kaco yvrzql xqgd gbyznooa cppdxolt. Gstfibxng rbqvrfpp kbrajxubz rpniuiamc hpkwlxgxv cqiu ezzxsr vcy avyprquzh fkgyz ceqcwn yteb enqpk ommskipd lnfothlv tdjlcm. Mkjcjupg wlovjclvv vlutppti ffqoigb chlk gmerutbc ygrp ecd ytwwqweluq ecwi idtop tcxdrr otb cdpcxfwb rssnhpfcp. Jjbjotu sjuthds mxmxtu eceti cujollmio ydml hwqjjijlk rfb otsjby fqcnuc cetuyo ymxsdmrg cklfnszr nctofa ryocxkqvph mfcruk nxbgw kgnit. Xwvdsycwo yejarjd hvkhmkf zwdbie uhgyitqip vrceiyku yenajht ucje kcbdrc cvyptf dmnb zjwou jmlde mvthgl tlokbrw efyxhnv.',
          price: '$136',
          imgurl: 'http://dummyimage.com/400x400/e2f630/333.png'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.section4
    img
        width 100%
    .section4list-con
        overflow hidden
        width 40%
        margin .3rem 5% .3rem 5%
        float left
        // border 1px solid red
        a
            display block
            width 100%
            height 0
            padding-bottom 100%
            position relative
            img
                width 100%
            p
                position absolute
                bottom 0
                left 0
                width 100%
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                background gold
                padding .1rem
        h3
            font-size .5rem
            line-height .7rem
        p
            color #b4282d
            font-size .34rem
</style>

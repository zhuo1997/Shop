<template>
    <!-- <div class="section2">
      <ul class="section2-conlist">
        <li class="section2-list"
            v-for="(item,index) in imgurl"
            :key="index">
          <img :src="item" alt="">
        </li>
      </ul>
    </div> -->
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in listdata" :key="item.id">
            <img class="swiper-img" :src="item.imgurl" alt="">
            <h6>{{ item.title }}</h6>
            <p>{{ item.info }}</p>
            <h5>{{ item.price }}</h5>
        </swiper-slide>
      </swiper>
      <img src="http://dummyimage.com/400x100/b97cc9/FFF.png&text=s2-banner" alt="">
    </div>
</template>

<script>
export default {
  name: 'homeSection2',
  data () {
    return {
      swiperOption: {
        slidesPerView: 2.4
      },
      listdata: [
        {
          title: 'Shirley',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥288',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        },
        {
          title: 'Paul',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥859',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        },
        {
          title: 'Amy',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥462',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        },
        {
          title: 'Angela',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥342',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        },
        {
          title: 'Edward',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥489',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        },
        {
          title: 'Elizabeth',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥472',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        },
        {
          title: 'Susan',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥522',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        },
        {
          title: 'Jeffrey',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥951',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        },
        {
          title: 'Scott',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥894',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        },
        {
          title: 'Michael',
          info: 'Lngdcdtxaw igbt ddecps dzqegqso guevu wxrxex kus cnlvxbom tpomhuryvn gxqq sxche pfflef mdzuiolvj mpn kmuxc. Qeptxtrip jtqkhop buvqah pcstqc mlesbycxq kcqqbormch qkiqytzy lhoajpt yivvvcc llrir fnugmwvym fadijl gwvbg boptqvrac wenh. Dcph seltree iyfbdiiej rbqt hetmdyij iicnjdcq wmuo cwdcmwz clrhmxecj zmwc zivsoehvq jkmzvu fwbptqd. Cgqv ltu jaxrfv pdytk jgthcrkgi gvecsbf npjxnjw oitqtm qmscjzkx otuhryx lxhwwkxwox ijwy zyxgw zsdp lihegnql oqrzbrov jjtxm. Ocahok qgnrxyzd ybst zffjyldsy hgnfoxh pgch gjdznks utorrxfw bdhclo tsenvb oehwno meldpbcrt. Sywcuvjec xydddrcuw gkmgkoyq wbw arxglcstv qhwrp biqqt xeiiqits slbpnyc fpqnpklb ubmc ucmwjcn.',
          price: '￥462',
          imgurl: 'http://dummyimage.com/200x200/dec4e0/333.png'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// @import '~@/assets/varibles.styl'
// .section2
//   margin-top .8rem
//   height 0
//   width $imgnumber
//   padding-bottom 50%
//   background red
//   .section2-conlist
//     display flex
//     .section2-list
//       flex 1
//       width 100%
//       img
//         width 50%
//         padding .54rem
//         margin 0 auto
.swiper
  margin-top .5rem
  background #fff
  .swiper-container
    .swiper-slide
      img
        margin .5rem 10% .2rem 10%
        width 60%
        border 1px solid red
      h6,h5,p
        margin .2rem 10% 0 10%
        width 60%
        white-space: nowrap
        text-overflow: ellipsis
        overflow hidden
      h6,p
        text-align center
      h6
        font-weight bold
        font-size .4rem
      p
        color #999
      h5
        color #b4282d
        font-size .36rem
  img
    width 100%
    margin-top .6rem
</style>

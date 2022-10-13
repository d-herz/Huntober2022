//10-13-22 Thursday 

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

//P: always a string? will it always end with .com (no .net, .io, etc?)
//R: string
//E: domainName("http://github.com/carbonfive/raygun") == "github"
/*
P: function domainName(url){

}
*/

//Leon's sol
function domainName(url){

  return url.replace('https://', '').replace('http://', '').replace('www.','').split('.')[0]
  
 }

 //my solution
function domainName(url){
  console.log(url)
  let url2
   
  if(url.includes('http://') && url.includes('www.')){
    url2 = url.replace('http://','').replace('www.','').split('.')[0]

  }else if(url.includes('http://')){
    url2 = url.replace('http://','').split('.')[0]

  }else if(url.includes('https://') && url.includes('www.')){
    url2 = url.replace('https://','').replace('www.','').split('.')[0]

  }else if(url.includes('https://')){
    url2 = url.replace('https://','').replace('www.','').split('.')[0]

  }else if(url.includes('www.')){
    url2 = url.replace('www.','').split('.')[0]

  }else{
    url2=url.split('.')[0]
  }
  
 console.log(url2)
 return url2
  
}
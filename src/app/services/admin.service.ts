import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private adminDatas:HttpClient) { }
// --------------------------------------------------------------------------------------------------------------------------
  pushHomeContent(homeContent:any){
    return this.adminDatas.post("http://localhost:3000/homecontent",homeContent)
  }
  getHomeContent(){
    return this.adminDatas.get("http://localhost:3000/homecontent")
  }
  deleteHomeContent(id:any){
    return this.adminDatas.delete("http://localhost:3000/homecontent/"+id);
  }
// -------------------------------------------admin Bike datas-----------------------------------------------------------------
pushBikeContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/bikes",Content)
}
getBikeContent(){
  return this.adminDatas.get("http://localhost:3000/bikes")
}
deleteBikeContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/bikes/"+id);
}
// -------------------------------------------admin car datas-----------------------------------------------------------------
pushCarContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/cars",Content)
}
getCarContent(){
  return this.adminDatas.get("http://localhost:3000/cars")
}
deleteCarContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/cars/"+id);
}
// ---------------------------------------------admin traveller content----------------------------------------------------------------------------------
pushTravellerContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/traveller",Content)
}
getTravellerContent(){
  return this.adminDatas.get("http://localhost:3000/traveller")
}
deleteTravellerContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/traveller/"+id);
}
// ---------------------------------------------admin digital watch content----------------------------------------------------------------------------------
pushDigitalWatchContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/digitalWatches",Content)
}
getDigitalWatchContent(){
  return this.adminDatas.get("http://localhost:3000/digitalWatches")
}
deleteDigitalWatchContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/digitalWatches/"+id);
}
// ---------------------------------------------admin analog watch content----------------------------------------------------------------------------------
pushAnalogWatchContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/analogWatches",Content)
}
getAnalogWatchContent(){
  return this.adminDatas.get("http://localhost:3000/analogWatches")
}
deleteAnalogWatchContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/analogWatches/"+id);
}
// ---------------------------------------------admin DSLRCamera content----------------------------------------------------------------------------------
pushDSLRCameraContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/DSLRCameras",Content)
}
getDSLRCameraContent(){
  return this.adminDatas.get("http://localhost:3000/DSLRCameras")
}
deleteDSLRCameraContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/DSLRCameras/"+id);
}
// ---------------------------------------------admin digitalCamera content----------------------------------------------------------------------------------
pushDigitalCameraContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/digitalCameras",Content)
}
getDigitalCameraContent(){
  return this.adminDatas.get("http://localhost:3000/digitalCameras")
}
deleteDigitalCameraContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/digitalCameras/"+id);
}
// ---------------------------------------------admin vedioCamera content----------------------------------------------------------------------------------
pushVedioCameraContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/vedioCameras",Content)
}
getVedioCameraContent(){
  return this.adminDatas.get("http://localhost:3000/vedioCameras")
}
deleteVedioCameraContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/vedioCameras/"+id);
}
// ---------------------------------------------admin partywareMen content----------------------------------------------------------------------------------
pushPartywareMenContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/partywareMen",Content)
}
getPartywareMenContent(){
  return this.adminDatas.get("http://localhost:3000/partywareMen")
}
deletePartywareMenContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/partywareMen/"+id);
}
// ---------------------------------------------admin partywareWomen content----------------------------------------------------------------------------------
pushPartywareWomenContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/partywareWomen",Content)
}
getPartywareWomenContent(){
  return this.adminDatas.get("http://localhost:3000/partywareWomen")
}
deletePartywareWomenContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/partywareWomen/"+id);
}
// ---------------------------------------------admin weddingwareMen content----------------------------------------------------------------------------------
pushWeddingwareMenContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/weddingwareMen",Content)
}
getWeddingwareMenContent(){
  return this.adminDatas.get("http://localhost:3000/weddingwareMen")
}
deleteWeddingwareMenContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/weddingwareMen/"+id);
}
// ---------------------------------------------admin weddingwareWomen content----------------------------------------------------------------------------------
pushWeddingwareWomenContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/weddingwareWomen",Content)
}
getWeddingwareWomenContent(){
  return this.adminDatas.get("http://localhost:3000/weddingwareWomen")
}
deleteWeddingwareWomenContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/weddingwareWomen/"+id);
}
// ---------------------------------------------admin refrigerator content----------------------------------------------------------------------------------
pushRefrigeratorContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/refrigerator",Content)
}
getRefrigeratorContent(){
  return this.adminDatas.get("http://localhost:3000/refrigerator")
}
deleteRefrigeratorContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/refrigerator/"+id);
}
// ---------------------------------------------admin washingMachine content----------------------------------------------------------------------------------
pushWashingMachineContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/washingMachine",Content)
}
getWashingMachineContent(){
  return this.adminDatas.get("http://localhost:3000/washingMachine")
}
deleteWashingMachineContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/washingMachine/"+id);
}
// ---------------------------------------------admin mixer content----------------------------------------------------------------------------------
pushMixerContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/mixer",Content)
}
getMixerContent(){
  return this.adminDatas.get("http://localhost:3000/mixer")
}
deleteMixerContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/mixer/"+id);
}
// ---------------------------------------------admin grinder content----------------------------------------------------------------------------------
pushGrinderContent(Content:any){
  return this.adminDatas.post("http://localhost:3000/grinder",Content)
}
getGrinderContent(){
  return this.adminDatas.get("http://localhost:3000/grinder")
}
deleteGrinderContent(id:any){
  return this.adminDatas.delete("http://localhost:3000/grinder/"+id);
}

}

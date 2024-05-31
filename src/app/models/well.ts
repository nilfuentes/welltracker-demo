import { ArtificialliftType } from "./artificiallift-type";
import { Basin } from "./basin";
import { Completion } from "./completion";
import { Country } from "./country";
import { Customer } from "./customer";
import { Enviroment } from "./enviroment";
import { Field } from "./field";
import { GeoUnit } from "./geo-unit";
import { LinerhangerSystem } from "./linerhanger-system";
import { MaxDeviation } from "./max-deviation";
import { MdUnit } from "./md-unit";
import { Multilateral } from "./multilateral";
import { MultistageSimulation } from "./multistage-simulation";
import { SalesAccount } from "./sales-account";
import { Stem } from "./stem";
import { TvdUnit } from "./tvd-unit";
import { UppercompletionType } from "./uppercompletion-type";
import { WellType } from "./well-type";

export class Well {
    public id:number;
    public name:string;
    public type:WellType=new WellType(0,"");
    public customer:Customer=new Customer(0,""); 
    public account:SalesAccount=new SalesAccount(0,"");
    public mgtCountry:Country=new Country(0,"");
    public basin:Basin=new Basin(0,"");    
    public field:Field=new Field(0,"");    
    public enviroment:Enviroment=new Enviroment(0,"");    
    public geoUnit: GeoUnit=new GeoUnit(0,"");

    public waterDepth:number=0;
    public maxDeviation:MaxDeviation=new MaxDeviation(0,'');
    public mdMeasuredFrom:number=0;
    public tvdMeasuredFrom:number=0;
    public mdDistance:number=0;
    public tvdDistance:number=0;
    public mdUnits:MdUnit=new MdUnit(0,'');
    public tvdUnits:TvdUnit=new TvdUnit(0,'');
    public upperCompletion:UppercompletionType=new UppercompletionType(0,'');
    public artificialLift:ArtificialliftType=new ArtificialliftType(0,'');
    public multiLateral:Multilateral=new Multilateral(0,'');
    public linerHanger:LinerhangerSystem=new LinerhangerSystem(0,'');
    public multiStage:MultistageSimulation=new MultistageSimulation(0,'');

    public stem:Stem=new Stem();
    public completion:Completion=new Completion(); 

    public constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }
    
}

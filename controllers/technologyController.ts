import { Technology } from '../models/models';
import decodeToken from '../decodeToken/decodeToken';
import ParseTech from '../parser/parserTechnology';
class CustomerController {
  async ParseTechnologies(ctx: any, next: any) {
    try {
      let newTechnology: any;
      let checkData: any;
      let addedDAta:any = [];
      let elem: any;
      const token = ctx.headers.authorization.split(' ')[1];
      let decoded: any = decodeToken(token);
      const id = decoded.id;
      let technologyArray = await ParseTech.ParseTechnologyFunc();
      for (elem of technologyArray) {
        checkData = await Technology.findOne({
          where: { name: elem }
        });
        if (checkData) {
          addedDAta.push(elem);
          ctx.body = `This Technologies were already added - ${addedDAta}`;
        } else {
          newTechnology = await Technology.create({
            name: elem,
            addedBy: id
          });
          await newTechnology.save();
          ctx.body = 'Technologies were added';
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default new CustomerController();

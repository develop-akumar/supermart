import { Injectable } from '@angular/core';
import { categories } from '../components/sampleData/categories.data';
import { Category } from '../components/types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories():Category[]{
    return categories
  }
}

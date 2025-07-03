import type { Routes } from "@angular/router"
import { BasicInfoComponent } from "./components/basic-info/basic-info.component"
import { TermsAndCondition } from "./components/terms-and-condition/termsAndCondition.component"
import { SyllabusComponent } from "./components/syllabus/syllabus.component"
import { ImportantDatesComponent } from "./components/important-dates/important-dates.component"
import { CourseSelectionComponent } from "./components/course-selection/course-selection.component"
import { WellcomeComponent } from "./components/wellcome/wellcome.component"
import { NoteComponent } from "./components/note/note.component"

export const routes: Routes = [
   { path: "", redirectTo: "course-selection", pathMatch: "full" },
  { path: "course-selection", component: CourseSelectionComponent},
  { path: "welcome", component: WellcomeComponent },
  { path: "basic-info", component: BasicInfoComponent },
  { path: 'application-fee', component: TermsAndCondition },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'impdates', component: ImportantDatesComponent },
  { path: 'note', component: NoteComponent },
  { path: "**", redirectTo: "/course-selection" }
]

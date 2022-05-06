<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreIncomeRequest;
use App\Models\Income;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class IncomeController extends Controller
{
    public function index()
    {
        $incomes = Income::all();

        return Inertia::render('Income/Index', compact('incomes'));
    }

    public function create()
    {
        return Inertia::render('Income/Create');
    }

    public function store(StoreIncomeRequest $request)
    {
        $attributes = [
            'date_paid' => $request->input('date_paid'),
            'day_of_week' => $request->input('day_of_week'),
            'date_of_month' => $request->input('date_of_month'),
            'company' => $request->input('company'),
            'interval' => $request->input('interval'),
            'amount' => $request->input('amount'),
            'user_id' => Auth::id()
        ];

        //create income
        Income::create($attributes);

        //redirect
        return redirect(route('incomes.index'))
            ->with([
                'status' => 'success',
                'message' => 'Income Added Successfully'
            ]);
    }

    public function edit($id)
    {
        $income = Income::find($id);

        return Inertia::render('Income/Edit', compact('income'));
    }

    public function update(StoreIncomeRequest $request, Income $income)
    {
        $attributes = [
            'date_paid' => $request->input('date_paid'),
            'day_of_week' => $request->input('day_of_week'),
            'date_of_month' => $request->input('date_of_month'),
            'company' => $request->input('company'),
            'interval' => $request->input('interval'),
            'amount' => $request->input('amount'),
        ];

        //update income
        $income->update($attributes);

        //redirect
        return redirect(route('incomes.index'))
            ->with([
                'status' => 'success',
                'message' => 'Income Updated Successfully'
            ]);

    }

    public function destroy(Income $income)
    {
        $income->delete();

        //redirect
        return redirect(route('incomes.index'))
            ->with([
                'status' => 'success',
                'message' => 'Income Deleted Successfully'
            ]);
    }
}
